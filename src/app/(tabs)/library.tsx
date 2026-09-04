/** INTEGRANTES
 * Cauê Gomes Prieto
 * Murillo Batista Maquiné
 * Yago Matheus Santos Lima
 */

import { colors } from '@/styles/colors'
import { View, Text } from 'react-native'

export default function LibraryCMY() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.gray[900] }}>
      <Text
        style={{ color: colors.white, textAlign: 'center', marginTop: 100 }}
      >
        Sua Biblioteca
      </Text>
    </View>
  )
}
