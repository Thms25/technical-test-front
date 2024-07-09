import { searchItem, User } from './types'

export function searchPages(pages: searchItem[], query: string) {
  return pages.filter(
    page =>
      page.name.toLowerCase().includes(query.toLowerCase()) ||
      page?.category?.toLowerCase().includes(query.toLowerCase()),
  )
}

export function searchUsers(users: User[], query: string) {
  return users.filter(user =>
    user.name.toLowerCase().includes(query.toLowerCase()),
  )
}

export const highlightMatch = (text: string, query: string) => {
  const parts = text.split(new RegExp(`(${query})`, 'gi'))
  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <span key={index} className="highlight">
        {part}
      </span>
    ) : (
      part
    ),
  )
}
