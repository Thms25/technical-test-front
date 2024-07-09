import { Box, Title, Text, List, Kbd, Anchor, Code } from '@mantine/core'
import '../../styles/instructions.css'

export const Instructions = () => {
  return (
    <Box>
      <Title>Instructions</Title>
      <Title mt="md" order={2}>
        Overview
      </Title>
      <Text>
        In this challenge, you will be creating a spotlight component for our
        stub application.
      </Text>
      <br />
      <Text>
        Spotlights, also known as command palettes, are a bit of floating UI
        that can be summoned by a keyboard shortcut, and give the user a
        searchbar that allows for quick access to parts of the site or
        application. They typically support arrow key navigation and sometimes
        allow for some symbols to act as modifiers for the search.{' '}
      </Text>
      <br />
      <Box>
        Some examples include:
        <List>
          <List.Item>
            The VS Code command palettes, accessible with (<Kbd>Shift</Kbd>) +{' '}
            <Kbd>⌘</Kbd> + <Kbd>P</Kbd>{' '}
          </List.Item>
          <List.Item>
            The Mac OS spotlight search, accessible with <Kbd>⌘</Kbd> +{' '}
            <Kbd>Space</Kbd>
          </List.Item>
          <List.Item>
            The Github command palette, accessible with <Kbd>⌘</Kbd> +{' '}
            <Kbd>K</Kbd> (if enabled in feature previews)
          </List.Item>
          <List.Item>
            <Anchor href="https://github.com/Flow-Launcher/Flow.Launcher">
              Flow
            </Anchor>{' '}
            for Windows
          </List.Item>
          <List.Item>
            Mantine's{' '}
            <Anchor href="https://mantine.dev/x/spotlight/">
              own implementation
            </Anchor>
          </List.Item>
        </List>
      </Box>
      <Title mt="md" order={2}>
        Specs
      </Title>
      <Box>
        Your spotlight:
        <List>
          <List.Item>
            will be opened by pressing either <Kbd>/</Kbd> or <Kbd>⌘/ctrl</Kbd>{' '}
            + <Kbd>P</Kbd>
          </List.Item>
          <List.Item>
            will be closed by clicking outside of it, or by pressing{' '}
            <Kbd>Esc</Kbd>
          </List.Item>
        </List>
        <br />
        It will have two modes:
        <Title mt="md" order={3}>
          1. Pages
        </Title>
        The pages available in our app are described in <Code>pages.json</Code>,
        which contains both the top-level navigation categories, and any
        subcategories they may have. There will never be more than one level of
        subcategory. The pages' names map directly to the - imaginary - routes
        of our application. As such:
        <List>
          <List.Item>
            "Dashboard" has no subcategories, therefore it should navigate to{' '}
            <Code>/dashboard</Code>
          </List.Item>
          <List.Item>
            "Settings" has several subcategories, therefore it is not accessible
            directly, but instead navigates to{' '}
            <Code>/settings/name-of-subcategory</Code>
          </List.Item>
        </List>
        <br />
        When first opened, the spotlight is in "Pages" mode, and displays all
        the available pages. If the user types in the searchbar, the spotlight
        should filter the pages and only display those that partially match the
        search query. For instance, searching for "an" should match the{' '}
        <span className="highlight">An</span>alytics routes, as well as the Comp
        <span className="highlight">an</span>y route in Settings.
        <br />
        The matching string in each result should be highlighted as shown above.
        <br />
        <br />
        Clicking one of the items should change the url to the expected path. As
        these pages do not exist, nothing else is expected to happen.
        <br />
        You <b>do not</b> need to implement keyboard navigation among the search
        results, but you can if time permits.
        <br />
        <br />
        The exact style of the spotlight, and the way in which results are
        displayed is intentionally left up to the implementer.
      </Box>
      <Title mt="md" order={3}>
        2. Users
      </Title>
      <Box>
        By prefixing the search with <Kbd>@</Kbd>, the user can switch to a mode
        in which he is now searching for users, rather than pages. The matching
        substring will agai be highlighted.
        <br />
        <br />
        To get the users, you may fetch them by using the mock{' '}
        <Code>loadUsers</Code> function in the api folder. Searching throught
        the users will behave the same way as searching through pages, but
        clicking a will navigate to <Code>/user/:id</Code> instead.
        <br />
        <br />
        Erasing the<Kbd>@</Kbd> will mean we search through pages again.
      </Box>
      <Title mt="md" order={2}>
        Implementation
      </Title>
      You will notice that the Mantine library is installed and used to style
      the stub of the application. You may - but are not obligated to - use
      Mantine to style your feature, <b>however</b>, you may not use its own{' '}
      <Code>Modal</Code> or <Code>Spotlight</Code> components. You may also
      install any additional dependencies you deem useful, provided that the do
      not violate the spirit of the previous guideline.
      <br />
      <br />
      To see how to add custom styles, refer to how this component handles{' '}
      <span className="highlight">highlighted text</span>.
      <Title mt="md" order={3}>
        Time
      </Title>
      Give yourself ~2-5 hours to implement this feature, considering that a
      working MVP is more important than fully implementing every requirement
      described in this document.
      <br />
      You may bring further polish to the feature, time permitting, but this is
      not required at all, nor should it be done unless all initial requirements
      have been met.
      <br />
      Regarding design, further consider that given the relatively small amount
      of time, clarity and legibility are more important than a pixel-perfect
      design. There will be time to discuss choices and avenues of improvements
      during the debrief.
      <br />I am available by email at any time for any other clarifications.
    </Box>
  )
}
