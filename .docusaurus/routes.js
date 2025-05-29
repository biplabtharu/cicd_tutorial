import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/cicd_tutorial/blog',
    component: ComponentCreator('/cicd_tutorial/blog', 'e29'),
    exact: true
  },
  {
    path: '/cicd_tutorial/blog/archive',
    component: ComponentCreator('/cicd_tutorial/blog/archive', '413'),
    exact: true
  },
  {
    path: '/cicd_tutorial/blog/authors',
    component: ComponentCreator('/cicd_tutorial/blog/authors', '83c'),
    exact: true
  },
  {
    path: '/cicd_tutorial/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/cicd_tutorial/blog/authors/all-sebastien-lorber-articles', 'b6e'),
    exact: true
  },
  {
    path: '/cicd_tutorial/blog/authors/yangshun',
    component: ComponentCreator('/cicd_tutorial/blog/authors/yangshun', '747'),
    exact: true
  },
  {
    path: '/cicd_tutorial/blog/first-blog-post',
    component: ComponentCreator('/cicd_tutorial/blog/first-blog-post', 'fa0'),
    exact: true
  },
  {
    path: '/cicd_tutorial/blog/long-blog-post',
    component: ComponentCreator('/cicd_tutorial/blog/long-blog-post', '4f9'),
    exact: true
  },
  {
    path: '/cicd_tutorial/blog/mdx-blog-post',
    component: ComponentCreator('/cicd_tutorial/blog/mdx-blog-post', 'e63'),
    exact: true
  },
  {
    path: '/cicd_tutorial/blog/tags',
    component: ComponentCreator('/cicd_tutorial/blog/tags', '2fb'),
    exact: true
  },
  {
    path: '/cicd_tutorial/blog/tags/docusaurus',
    component: ComponentCreator('/cicd_tutorial/blog/tags/docusaurus', 'b6c'),
    exact: true
  },
  {
    path: '/cicd_tutorial/blog/tags/facebook',
    component: ComponentCreator('/cicd_tutorial/blog/tags/facebook', 'f6c'),
    exact: true
  },
  {
    path: '/cicd_tutorial/blog/tags/hello',
    component: ComponentCreator('/cicd_tutorial/blog/tags/hello', '2ec'),
    exact: true
  },
  {
    path: '/cicd_tutorial/blog/tags/hola',
    component: ComponentCreator('/cicd_tutorial/blog/tags/hola', '051'),
    exact: true
  },
  {
    path: '/cicd_tutorial/blog/welcome',
    component: ComponentCreator('/cicd_tutorial/blog/welcome', '0fb'),
    exact: true
  },
  {
    path: '/cicd_tutorial/markdown-page',
    component: ComponentCreator('/cicd_tutorial/markdown-page', '2a4'),
    exact: true
  },
  {
    path: '/cicd_tutorial/docs',
    component: ComponentCreator('/cicd_tutorial/docs', 'ca0'),
    routes: [
      {
        path: '/cicd_tutorial/docs',
        component: ComponentCreator('/cicd_tutorial/docs', 'ab6'),
        routes: [
          {
            path: '/cicd_tutorial/docs',
            component: ComponentCreator('/cicd_tutorial/docs', 'aee'),
            routes: [
              {
                path: '/cicd_tutorial/docs/category/tutorial---basics',
                component: ComponentCreator('/cicd_tutorial/docs/category/tutorial---basics', 'ee2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cicd_tutorial/docs/category/tutorial---extras',
                component: ComponentCreator('/cicd_tutorial/docs/category/tutorial---extras', '630'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cicd_tutorial/docs/intro',
                component: ComponentCreator('/cicd_tutorial/docs/intro', '8b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cicd_tutorial/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/cicd_tutorial/docs/tutorial-basics/congratulations', '4ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cicd_tutorial/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/cicd_tutorial/docs/tutorial-basics/create-a-blog-post', 'cac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cicd_tutorial/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/cicd_tutorial/docs/tutorial-basics/create-a-document', 'dc6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cicd_tutorial/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/cicd_tutorial/docs/tutorial-basics/create-a-page', 'e69'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cicd_tutorial/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/cicd_tutorial/docs/tutorial-basics/deploy-your-site', '6a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cicd_tutorial/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/cicd_tutorial/docs/tutorial-basics/markdown-features', 'd79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cicd_tutorial/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/cicd_tutorial/docs/tutorial-extras/manage-docs-versions', '2ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cicd_tutorial/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/cicd_tutorial/docs/tutorial-extras/translate-your-site', 'a13'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/cicd_tutorial/',
    component: ComponentCreator('/cicd_tutorial/', '88c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
