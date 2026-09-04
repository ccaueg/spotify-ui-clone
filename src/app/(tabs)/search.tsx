/** INTEGRANTES
 * Cauê Gomes Prieto
 * Murillo Batista Maquiné
 * Yago Matheus Santos Lima
 */

import { colors } from '@/styles/colors'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Search as SearchIcon, X } from 'lucide-react-native'
import { useState, useEffect } from 'react'

import { Loading } from '@/components/loading'
import { CategoryCard } from '@/components/card-categoria'
import {
  type SearchResultCMY,
  SearchResultItemCMY,
} from '@/components/item-resultado-busca'

const LASTFM_API_KEY = process.env.EXPO_PUBLIC_LASTFM_API_KEY
const LASTFM_BASE_URL = 'https://ws.audioscrobbler.com/2.0/'

interface MusicaCMY {
  name: string
  artist: string
  url: string
  listeners?: string
  playcount?: string
}

interface ArtistaCMY {
  name: string
  url: string
  listeners?: string
  playcount?: string
}

const categoriasNavegacaoCMY = [
  { id: '1', title: 'Música', color: '#E91E63', image: '🎵' },
  { id: '2', title: 'Podcasts', color: '#9C27B0', image: '🎙️' },
  { id: '3', title: 'Feito para você', color: '#3F51B5', image: '👤' },
  { id: '4', title: 'Em alta', color: '#2196F3', image: '📊' },
  { id: '5', title: 'Lançamentos', color: '#00BCD4', image: '🆕' },
  { id: '6', title: 'Descubra', color: '#009688', image: '🔍' },
  { id: '7', title: 'Concertos', color: '#4CAF50', image: '🎤' },
  { id: '8', title: 'Pop', color: '#8BC34A', image: '🎭' },
  { id: '9', title: 'Rock', color: '#CDDC39', image: '🎸' },
  { id: '10', title: 'Hip-Hop', color: '#FFC107', image: '🎤' },
  { id: '11', title: 'Indie', color: '#795548', image: '🎨' },
  { id: '12', title: 'Eletrônica', color: '#607D8B', image: '🎛️' },
  { id: '13', title: 'Country', color: '#FF6B6B', image: '🤠' },
  { id: '14', title: 'Jazz', color: '#4ECDC4', image: '🎺' },
]

export default function SearchCMY() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [searchResults, setSearchResults] = useState<SearchResultCMY[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchTimeout, setSearchTimeout] = useState<number | null>(null)

  async function searchTracksCMY(query: string): Promise<SearchResultCMY[]> {
    try {
      const response = await fetch(
        `${LASTFM_BASE_URL}?method=track.search&track=${encodeURIComponent(query)}&api_key=${LASTFM_API_KEY}&format=json&limit=15`
      )
      const data = await response.json()

      if (data.results?.trackmatches?.track) {
        const tracks = Array.isArray(data.results.trackmatches.track)
          ? data.results.trackmatches.track
          : [data.results.trackmatches.track]

        return tracks.map((track: MusicaCMY, index: number) => ({
          id: `track-${index}`,
          type: 'track',
          title: track.name,
          artist: track.artist,
          subtitle: `Música • ${track.artist}`,
          url: track.url,
        }))
      }
      return []
    } catch (error) {
      console.error('Erro ao buscar músicas:', error)
      return []
    }
  }

  async function searchArtistsCMY(query: string): Promise<SearchResultCMY[]> {
    try {
      const response = await fetch(
        `${LASTFM_BASE_URL}?method=artist.search&artist=${encodeURIComponent(query)}&api_key=${LASTFM_API_KEY}&format=json&limit=4`
      )
      const data = await response.json()

      if (data.results?.artistmatches?.artist) {
        const artists = Array.isArray(data.results.artistmatches.artist)
          ? data.results.artistmatches.artist
          : [data.results.artistmatches.artist]

        return artists.map((artist: ArtistaCMY, index: number) => ({
          id: `artist-${index}`,
          type: 'artist',
          title: artist.name,
          subtitle: 'Artista',
          url: artist.url,
        }))
      }
      return []
    } catch (error) {
      console.error('Erro ao buscar artistas:', error)
      return []
    }
  }

  function analyzeSearchQueryCMY(query: string) {
    const lowerQueryCMY = query.toLowerCase().trim()
    return lowerQueryCMY.split(' ').length <= 2 ? 'artist' : 'track'
  }

  async function searchCMY(query: string) {
    if (!query.trim() || !LASTFM_API_KEY) return

    setIsLoading(true)
    try {
      const searchTypeCMY = analyzeSearchQueryCMY(query)
      let combinedResultsCMY: SearchResultCMY[] = []

      if (searchTypeCMY === 'artist') {
        const [artists, tracks] = await Promise.all([
          searchArtistsCMY(query),
          searchTracksCMY(query),
        ])
        combinedResultsCMY = [...artists, ...tracks.slice(0, 8)]
      } else {
        const [tracks, artists] = await Promise.all([
          searchTracksCMY(query),
          searchArtistsCMY(query),
        ])
        combinedResultsCMY = [...tracks, ...artists.slice(0, 5)]
      }

      setSearchResults(combinedResultsCMY)
    } catch (error) {
      console.error('Erro na busca:', error)
      Alert.alert('Erro', 'Ocorreu um erro ao buscar. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  function handleSearchCMY(text: string) {
    setSearchQuery(text)
    setIsSearching(text.length > 0)

    if (searchTimeout) {
      clearTimeout(searchTimeout)
    }

    if (text.length > 0) {
      const timeoutCMY = setTimeout(() => {
        searchCMY(text)
      }, 500)
      setSearchTimeout(timeoutCMY)
    } else {
      setSearchResults([])
      setIsLoading(false)
    }
  }

  function clearSearchCMY() {
    setSearchQuery('')
    setIsSearching(false)
    setSearchResults([])
    setIsLoading(false)
    if (searchTimeout) {
      clearTimeout(searchTimeout)
    }
  }

  useEffect(() => {
    return () => {
      if (searchTimeout) {
        clearTimeout(searchTimeout)
      }
    }
  }, [searchTimeout])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Buscar</Text>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <SearchIcon color={colors.gray[800]} size={20} />
            <TextInput
              style={styles.searchInput}
              placeholder="O que você quer ouvir?"
              placeholderTextColor={colors.gray[700]}
              value={searchQuery}
              onChangeText={handleSearchCMY}
              autoCapitalize="none"
              autoCorrect={false}
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity
                onPress={clearSearchCMY}
                style={styles.clearButton}
              >
                <X color={colors.gray[600]} size={20} />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {isSearching ? (
          <View style={styles.searchResults}>
            {isLoading && (
              <View style={styles.loadingContainer}>
                <Loading />
              </View>
            )}

            {searchQuery.length > 0 && !isLoading && (
              <View style={styles.section}>
                {searchResults.length > 0 ? (
                  <FlatList
                    data={searchResults}
                    renderItem={({ item }) => (
                      <SearchResultItemCMY item={item} />
                    )}
                    keyExtractor={item => item.id}
                    scrollEnabled={false}
                  />
                ) : (
                  <View style={styles.noResults}>
                    <Text style={styles.noResultsText}>
                      Nenhum resultado encontrado para "{searchQuery}"
                    </Text>
                  </View>
                )}
              </View>
            )}
          </View>
        ) : (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Navegar por todas as seções</Text>
            <View style={styles.categoriesGrid}>
              {categoriasNavegacaoCMY.map(item => (
                <CategoryCard key={item.id} item={item} />
              ))}
            </View>
          </View>
        )}

        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[900],
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: colors.gray[800],
    paddingVertical: 4,
  },
  clearButton: {
    padding: 4,
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 16,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  searchResults: {
    flex: 1,
  },
  loadingContainer: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  noResults: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  noResultsText: {
    color: colors.gray[600],
    fontSize: 16,
    textAlign: 'center',
  },
})
