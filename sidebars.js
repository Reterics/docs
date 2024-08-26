// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [{ type: 'autogenerated', dirName: '.' }],
  'getting-started': [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'getting-started'
        }
      ]
    }
  ],
  'technical-documentation': [
    {
      type: 'category',
      label: 'Architecture',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'technical-documentation/overview'
        },
        {
          type: 'category',
          label: 'Ontology',
          items: [
            {
              type: 'autogenerated',
              dirName: 'technical-documentation/ontology'
            }
          ]
        },
        {
          type: 'category',
          label: 'Governance',
          items: [
            {
              type: 'autogenerated',
              dirName: 'technical-documentation/governance'
            }
          ]
        }
      ]
    }
  ],
  nodes: [
    {
      type: 'category',
      label: 'Running a Node',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'nodes'
        }
      ]
    }
  ],
  tutorials: [
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'tutorials'
        }
      ]
    }
  ],
  whitepaper: [
    {
      type: 'category',
      label: 'Whitepaper',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'whitepaper'
        }
      ]
    }
  ],
  contribute: [
    {
      type: 'category',
      label: 'Contribute to Axone',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'contribute'
        }
      ]
    }
  ],
  'api-reference': [
    {
      type: 'category',
      label: 'API Reference',
      items: [
        {
          type: 'html',
          value: '<hr/>'
        },
        {
          type: 'link',
          label: 'Smart contracts',
          href: '/contracts/axone-cognitarium'
        },
        {
          type: 'link',
          label: 'Ontology',
          href: '/ontology/schemas/credential-dataset-description'
        },
        {
          type: 'link',
          label: 'Governance Predicates',
          href: '/predicates/bank_balances_2'
        },
        {
          type: 'link',
          label: 'Modules',
          href: '/modules/logic'
        },
        {
          type: 'link',
          label: 'Commands line interface',
          href: '/commands/axoned'
        }
      ]
    }
  ],
  faq: [
    {
      type: 'doc',
      id: 'faq/faq',
      label: 'FAQ'
    }
  ]
}

module.exports = sidebars
