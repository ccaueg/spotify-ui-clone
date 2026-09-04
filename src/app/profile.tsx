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
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  ArrowLeft,
  MoreHorizontal,
  ChevronRight,
  User,
} from 'lucide-react-native'
import { useRouter } from 'expo-router'

const playlists = [
  {
    id: '1',
    title: 'Curtidas',
    subtitle: '0 curtidas',
    image: '💚',
    type: 'curtidas',
  },
  {
    id: '2',
    title: 'Trabalho',
    subtitle: '7 curtidas',
    image: '💼',
    type: 'playlist',
  },
  {
    id: '3',
    title: 'Melhores',
    subtitle: '2 curtidas',
    image: '🎵',
    type: 'playlist',
  },
]

export default function PerfilCMY() {
  const router = useRouter()

  function voltarCMY() {
    router.back()
  }

  function editarPerfilCMY() {
    console.log('Editar perfil')
  }

  function pressionarPlaylistCMY(idPlaylist: string) {
    console.log('Navegou para playlist:', idPlaylist)
  }

  function verTodasPlaylistsCMY() {
    console.log('Ver todas as playlists')
  }

  return (
    <SafeAreaView style={styles.containerCMY}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cabecalhoCMY}>
          <TouchableOpacity onPress={voltarCMY} style={styles.botaoVoltarCMY}>
            <ArrowLeft color={colors.white} size={24} />
          </TouchableOpacity>
          <View style={styles.cabecalhoDireitaCMY}>
            <TouchableOpacity style={styles.botaoMaisCMY}>
              <MoreHorizontal color={colors.white} size={24} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerPerfilCMY}>
          <View style={styles.containerImagemPerfilCMY}>
            <View style={styles.imagemPerfilCMY}>
              <User color={colors.white} size={60} />
            </View>
          </View>

          <Text style={styles.nomePerfilCMY}>Yago Lima</Text>

          <TouchableOpacity
            style={styles.botaoEditarPerfilCMY}
            onPress={editarPerfilCMY}
          >
            <Text style={styles.textoEditarPerfilCMY}>Editar perfil</Text>
          </TouchableOpacity>

          <View style={styles.containerEstatisticasCMY}>
            <View style={styles.itemEstatisticaCMY}>
              <Text style={styles.numeroEstatisticaCMY}>76</Text>
              <Text style={styles.rotuloEstatisticaCMY}>SEGUIDORES</Text>
            </View>
            <View style={styles.itemEstatisticaCMY}>
              <Text style={styles.numeroEstatisticaCMY}>53</Text>
              <Text style={styles.rotuloEstatisticaCMY}>SEGUINDO</Text>
            </View>
          </View>
        </View>

        <View style={styles.secaoPlaylistsCMY}>
          <Text style={styles.tituloSecaoCMY}>Playlists</Text>

          <View style={styles.listaPlaylistsCMY}>
            {playlists.map(playlist => {
              return (
                <TouchableOpacity
                  key={playlist.id}
                  style={styles.itemPlaylistCMY}
                  onPress={() => pressionarPlaylistCMY(playlist.id)}
                >
                  <View style={styles.containerImagemPlaylistCMY}>
                    <View
                      style={[
                        styles.imagemPlaylistCMY,
                        playlist.type === 'curtidas' &&
                          styles.imagemMusicasCurtidasCMY,
                      ]}
                    >
                      <Text style={styles.emojiPlaylistCMY}>
                        {playlist.image}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.infoPlaylistCMY}>
                    <Text style={styles.tituloPlaylistCMY}>
                      {playlist.title}
                    </Text>
                    <Text style={styles.subtituloPlaylistCMY}>
                      {playlist.subtitle}
                    </Text>
                  </View>
                  <ChevronRight color={colors.gray[600]} size={20} />
                </TouchableOpacity>
              )
            })}
          </View>

          <TouchableOpacity
            style={styles.botaoVerTodasCMY}
            onPress={verTodasPlaylistsCMY}
          >
            <Text style={styles.textoVerTodasCMY}>Ver todas as playlists</Text>
            <ChevronRight color={colors.gray[600]} size={20} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containerCMY: {
    flex: 1,
    backgroundColor: colors.gray[900],
  },
  cabecalhoCMY: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  botaoVoltarCMY: {
    padding: 4,
  },
  cabecalhoDireitaCMY: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  botaoMaisCMY: {
    padding: 4,
  },
  containerPerfilCMY: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  containerImagemPerfilCMY: {
    marginBottom: 16,
  },
  imagemPerfilCMY: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.gray[700],
    justifyContent: 'center',
    alignItems: 'center',
  },
  nomePerfilCMY: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 16,
  },
  botaoEditarPerfilCMY: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: colors.gray[600],
    borderRadius: 20,
    marginBottom: 24,
  },
  textoEditarPerfilCMY: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.white,
  },
  containerEstatisticasCMY: {
    flexDirection: 'row',
    gap: 40,
  },
  itemEstatisticaCMY: {
    alignItems: 'center',
  },
  numeroEstatisticaCMY: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 4,
  },
  rotuloEstatisticaCMY: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.gray[600],
    letterSpacing: 1,
  },
  secaoPlaylistsCMY: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  tituloSecaoCMY: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 16,
  },
  listaPlaylistsCMY: {
    marginBottom: 16,
  },
  itemPlaylistCMY: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  containerImagemPlaylistCMY: {
    marginRight: 12,
  },
  imagemPlaylistCMY: {
    width: 50,
    height: 50,
    borderRadius: 4,
    backgroundColor: colors.gray[700],
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagemMusicasCurtidasCMY: {
    backgroundColor: colors.green,
  },
  emojiPlaylistCMY: {
    fontSize: 20,
  },
  infoPlaylistCMY: {
    flex: 1,
  },
  tituloPlaylistCMY: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
    marginBottom: 2,
  },
  subtituloPlaylistCMY: {
    fontSize: 14,
    color: colors.gray[600],
  },
  botaoVerTodasCMY: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  textoVerTodasCMY: {
    fontSize: 16,
    color: colors.white,
  },
})
