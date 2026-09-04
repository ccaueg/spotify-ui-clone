/** INTEGRANTES
 * Cauê Gomes Prieto
 * Murillo Batista Maquiné
 * Yago Matheus Santos Lima
 */

import { colors } from '@/styles/colors'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export interface SearchResultCMY {
  id: string
  type: 'track' | 'artist'
  title: string
  artist?: string
  subtitle: string
  url: string
}

export function SearchResultItemCMY({ item }: { item: SearchResultCMY }) {
  return (
    <TouchableOpacity style={styles.searchResultItem} onPress={() => {}}>
      <View
        style={[
          styles.searchResultImage,
          item.type === 'artist' ? styles.artistImage : styles.trackImage,
        ]}
      >
        <Text style={styles.searchResultImageText}>
          {item.type === 'artist' ? '👤' : '🎵'}
        </Text>
      </View>
      <View style={styles.searchResultInfo}>
        <Text style={styles.searchResultTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.searchResultSubtitle} numberOfLines={1}>
          {item.subtitle}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  searchResultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    gap: 12,
  },
  searchResultImage: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray[700],
  },
  artistImage: {
    borderRadius: 25,
  },
  trackImage: {
    borderRadius: 4,
  },
  searchResultImageText: {
    fontSize: 20,
  },
  searchResultInfo: {
    flex: 1,
  },
  searchResultTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
  },
  searchResultSubtitle: {
    fontSize: 14,
    color: colors.gray[600],
    marginTop: 2,
  },
})
