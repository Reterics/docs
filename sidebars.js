// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    'index',
    {
      type: 'category',
      label: 'Whitepaper',
      items: [
        {
          type: 'autogenerated',
          dirName: 'whitepaper'
        }
      ]
    },
    {
      type: 'category',
      label: 'Nodes & Validators',
      items: [
        {
          type: 'autogenerated',
          dirName: 'nodes'
        }
      ]
    },
    {
      type: 'category',
      label: 'Technical documentation',
      items: [
        {
          type: 'autogenerated',
          dirName: 'tech-documentation'
        }
      ]
    },
    {
      type: 'doc',
      id: 'faq/faq',
      label: 'FAQ'
    }
  ]
}

module.exports = sidebars
