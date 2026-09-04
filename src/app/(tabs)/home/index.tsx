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
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Settings, Play } from 'lucide-react-native'
import { useRouter } from 'expo-router'

const { width } = Dimensions.get('window')

const recentementeTocadosCMY = [
  { id: '1', title: 'Músicas Curtidas', image: '💚', type: 'playlist' },
  { id: '2', title: 'Heavy Metal', image: '🎸', type: 'playlist' },
  { id: '3', title: 'Para Dormir', image: '💤', type: 'playlist' },
  { id: '4', title: 'Mix de Treino', image: '💪', type: 'playlist' },
  { id: '5', title: 'Pop', image: '🎵', type: 'playlist' },
  { id: '6', title: 'Jazz', image: '☕', type: 'playlist' },
]

const feitoParaVoceCMY = [
  {
    id: '1',
    title: 'Descobertas da Semana',
    subtitle: 'Seu mix semanal com música nova',
    image: '🎯',
  },
  {
    id: '2',
    title: 'Radar de Lançamentos',
    subtitle: 'Fique por dentro dos lançamentos dos seus artistas',
    image: '📡',
  },
  {
    id: '3',
    title: 'Mix Diário 1',
    subtitle: 'Oruam, MC Poze e mais',
    image: '🎭',
  },
]

const artistasRecentesCMY = [
  { id: '1', name: 'Oruam', image: '👤' },
  { id: '2', name: 'MC Poze', image: '👤' },
  { id: '3', name: 'Eminem', image: '👤' },
  { id: '4', name: 'Exalta Samba', image: '👤' },
  { id: '5', name: 'Linkin Park', image: '👤' },
]

export default function IndexCMY() {
  const routerCMY = useRouter()

  const navegarParaConfiguracoesCMY = () => {
    routerCMY.push('/settings')
  }

  function saudacaoCMY() {
    const horaCMY = new Date().getHours()
    return horaCMY < 12 ? 'Bom dia' : horaCMY < 18 ? 'Boa tarde' : 'Boa noite'
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cabecalho}>
          <View style={styles.cabecalhoEsquerdo}>
            <Text style={styles.saudacao}>{saudacaoCMY()}</Text>
          </View>
          <View style={styles.cabecalhoDireito}>
            <TouchableOpacity
              style={styles.botaoConfiguracoes}
              onPress={navegarParaConfiguracoesCMY}
            >
              <Settings color={colors.white} size={24} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.recentementeTocadosContainer}>
          <View style={styles.recentementeTocadosGrade}>
            {recentementeTocadosCMY.map(item => (
              <TouchableOpacity
                key={item.id}
                style={styles.recentementeTocadosItem}
              >
                <View style={styles.recentementeTocadosImagem}>
                  <Text style={styles.recentementeTocadosEmoji}>
                    {item.image}
                  </Text>
                </View>
                <Text
                  style={styles.recentementeTocadosTitulo}
                  numberOfLines={1}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Feito para você</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.listaHorizontal}>
              {feitoParaVoceCMY.map(item => (
                <TouchableOpacity key={item.id} style={styles.cartaoPlaylist}>
                  <View style={styles.playlistImagem}>
                    <Text style={styles.playlistEmoji}>{item.image}</Text>
                  </View>
                  <Text style={styles.playlistTitulo} numberOfLines={1}>
                    {item.title}
                  </Text>
                  <Text style={styles.playlistSubtitulo} numberOfLines={2}>
                    {item.subtitle}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Artistas tocados recentemente</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.listaHorizontal}>
              {artistasRecentesCMY.map(artista => (
                <TouchableOpacity key={artista.id} style={styles.cartaoArtista}>
                  <View style={styles.artistaImagem}>
                    <Text style={styles.artistaEmoji}>{artista.image}</Text>
                  </View>
                  <Text style={styles.artistaNome} numberOfLines={1}>
                    {artista.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Ouça novamente</Text>
          <View style={styles.listaOuvirNovamente}>
            {recentementeTocadosCMY.slice(0, 3).map(item => (
              <TouchableOpacity key={item.id} style={styles.itemOuvirNovamente}>
                <View style={styles.imagemOuvirNovamente}>
                  <Text style={styles.emojiOuvirNovamente}>{item.image}</Text>
                </View>
                <View style={styles.infoOuvirNovamente}>
                  <Text style={styles.tituloOuvirNovamente}>{item.title}</Text>
                  <Text style={styles.subtituloOuvirNovamente}>Playlist</Text>
                </View>
                <TouchableOpacity style={styles.botaoPlay}>
                  <Play
                    color={colors.gray[900]}
                    size={20}
                    fill={colors.gray[900]}
                  />
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        </View>

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
  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  cabecalhoEsquerdo: {
    flex: 1,
  },
  cabecalhoDireito: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  saudacao: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.white,
  },
  botaoConfiguracoes: {
    padding: 8,
  },
  recentementeTocadosContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  recentementeTocadosGrade: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  recentementeTocadosItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray[800],
    borderRadius: 4,
    width: (width - 40) / 2,
    height: 60,
    overflow: 'hidden',
  },
  recentementeTocadosImagem: {
    width: 60,
    height: 60,
    backgroundColor: colors.gray[700],
    justifyContent: 'center',
    alignItems: 'center',
  },
  recentementeTocadosEmoji: {
    fontSize: 24,
  },
  recentementeTocadosTitulo: {
    flex: 1,
    fontSize: 13,
    fontWeight: '600',
    color: colors.white,
    paddingHorizontal: 12,
  },
  secao: {
    marginBottom: 32,
  },
  secaoTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  listaHorizontal: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 16,
  },
  cartaoPlaylist: {
    width: 150,
  },
  playlistImagem: {
    width: 150,
    height: 150,
    backgroundColor: colors.gray[700],
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  playlistEmoji: {
    fontSize: 48,
  },
  playlistTitulo: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.white,
    marginBottom: 4,
  },
  playlistSubtitulo: {
    fontSize: 12,
    color: colors.gray[600],
    lineHeight: 16,
  },
  cartaoArtista: {
    width: 120,
    alignItems: 'center',
  },
  artistaImagem: {
    width: 120,
    height: 120,
    backgroundColor: colors.gray[700],
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  artistaEmoji: {
    fontSize: 40,
  },
  artistaNome: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.white,
    textAlign: 'center',
  },
  listaOuvirNovamente: {
    paddingHorizontal: 16,
    gap: 8,
  },
  itemOuvirNovamente: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  imagemOuvirNovamente: {
    width: 50,
    height: 50,
    backgroundColor: colors.gray[700],
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  emojiOuvirNovamente: {
    fontSize: 20,
  },
  infoOuvirNovamente: {
    flex: 1,
  },
  tituloOuvirNovamente: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
  },
  subtituloOuvirNovamente: {
    fontSize: 14,
    color: colors.gray[600],
    marginTop: 2,
  },
  botaoPlay: {
    width: 36,
    height: 36,
    backgroundColor: colors.green,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
