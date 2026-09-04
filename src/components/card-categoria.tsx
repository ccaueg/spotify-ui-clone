/** INTEGRANTES
 * Cauê Gomes Prieto
 * Murillo Batista Maquiné
 * Yago Matheus Santos Lima
 */

import { colors } from '@/styles/colors'
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native'

const { width } = Dimensions.get('window')

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function CategoryCard({ item }: { item: any }) {
  return (
    <TouchableOpacity
      style={[styles.categoryCard, { backgroundColor: item.color }]}
    >
      <Text style={styles.categoryTitle}>{item.title}</Text>
      <Text style={styles.categoryEmoji}>{item.image}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  categoryCard: {
    width: (width - 40) / 2,
    height: 100,
    borderRadius: 8,
    padding: 16,
    justifyContent: 'space-between',
    position: 'relative',
    overflow: 'hidden',
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
  categoryEmoji: {
    fontSize: 24,
    position: 'absolute',
    bottom: 8,
    right: 8,
    transform: [{ rotate: '15deg' }],
  },
})
