// Hooks
import { useState } from 'react'

// Style
import '../../styles/instructions.css'

// Components
import {
  Flex,
  Paper,
  Stack,
  Text,
  TextInput,
  useMantineTheme,
} from '@mantine/core'

// Utils
import { User, searchItem } from '../../utils/types'
import pages from '../../pages.json'
import {
  searchPages,
  searchUsers,
  highlightMatch,
} from '../../utils/search-utils'
import { arrowRight, searchIcon } from '../../assets/svgData'
import { Link } from 'react-router-dom'

type SearchPageType = {
  users: User[]
  handleSelect: () => void
}

// --------------------------------------------------------

export default function Search({ users, handleSelect }: SearchPageType) {
  const theme = useMantineTheme()
  const [searchData, setSearchData] = useState<searchItem[]>([])
  const [query, setQuery] = useState<string>('')

  const pagesData = pages.subcategories
  const search = (query: string) => {
    if (!query) {
      setSearchData([])
      return
    }
    setQuery(query[0] === '@' ? query.split('@')[1] : query)
    const searchResult =
      query[0] === '@'
        ? searchUsers(users, query.split('@')[1])
        : searchPages(pagesData, query)
    setSearchData(searchResult)
  }

  return (
    <Stack w={'100%'}>
      <TextInput
        radius={'md'}
        size="md"
        placeholder="Search..."
        onChange={event => {
          search(event.currentTarget.value)
        }}
        leftSection={searchIcon}
        styles={{
          input: {
            color: theme.colors.myColor[3],
            backgroundColor: theme.colors.myColor[0],
          },
        }}
      />
      <Paper
        // bg={'myColor.0'}
        radius={'md'}
        style={{
          maxHeight: 240,
          overflow: 'scroll',
        }}
      >
        {!!searchData.length && (
          <>
            {searchData.map((item: searchItem, index: number) => (
              <Link
                to={
                  item.category
                    ? `/${item.category}/${item.name}`
                    : `/user/${item.name}`
                }
                style={{
                  textDecoration: 'none',
                }}
                key={index}
              >
                <Flex
                  p={'xs'}
                  justify="space-between"
                  align="center"
                  bg="myColor.0"
                  c={theme.colors.myColor[3]}
                  style={{
                    cursor: 'pointer',
                    border: `1px solid ${theme.colors.myColor[2]}`,
                  }}
                  onClick={() => {
                    handleSelect()
                  }}
                >
                  <Flex
                    gap={'sm'}
                    align="center"
                    justify="center"
                    c={theme.colors.myColor[3]}
                  >
                    {arrowRight}
                    <Text
                      size="md"
                      style={{
                        cursor: 'pointer',
                      }}
                      c={'myColor.3'}
                    >
                      {highlightMatch(item.name, query)}
                    </Text>
                  </Flex>
                  {item.category && (
                    <Text size="sm">
                      {highlightMatch(item.category, query)}
                    </Text>
                  )}
                </Flex>
              </Link>
            ))}
          </>
        )}
      </Paper>
    </Stack>
  )
}
