// @vitest-environment node

describe('utils/dates', () => {
  describe('formatDate', () => {
    it('should format date correctly', () => {
      const date = '2022-01-01T00:00:00.000Z'
      const expected = '1/1/2022'

      const result = formatToLocaleDate(date)

      expect(result).toBe(expected)
    })
  })
})