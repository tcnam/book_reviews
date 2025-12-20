import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/book_reviews/blog',
    component: ComponentCreator('/book_reviews/blog', 'c35'),
    exact: true
  },
  {
    path: '/book_reviews/blog/archive',
    component: ComponentCreator('/book_reviews/blog/archive', '954'),
    exact: true
  },
  {
    path: '/book_reviews/blog/authors',
    component: ComponentCreator('/book_reviews/blog/authors', '3cd'),
    exact: true
  },
  {
    path: '/book_reviews/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/book_reviews/blog/authors/all-sebastien-lorber-articles', '7bd'),
    exact: true
  },
  {
    path: '/book_reviews/blog/authors/yangshun',
    component: ComponentCreator('/book_reviews/blog/authors/yangshun', 'a22'),
    exact: true
  },
  {
    path: '/book_reviews/blog/first-blog-post',
    component: ComponentCreator('/book_reviews/blog/first-blog-post', 'cce'),
    exact: true
  },
  {
    path: '/book_reviews/blog/long-blog-post',
    component: ComponentCreator('/book_reviews/blog/long-blog-post', '543'),
    exact: true
  },
  {
    path: '/book_reviews/blog/mdx-blog-post',
    component: ComponentCreator('/book_reviews/blog/mdx-blog-post', 'a68'),
    exact: true
  },
  {
    path: '/book_reviews/blog/tags',
    component: ComponentCreator('/book_reviews/blog/tags', '2f5'),
    exact: true
  },
  {
    path: '/book_reviews/blog/tags/docusaurus',
    component: ComponentCreator('/book_reviews/blog/tags/docusaurus', 'e46'),
    exact: true
  },
  {
    path: '/book_reviews/blog/tags/facebook',
    component: ComponentCreator('/book_reviews/blog/tags/facebook', '229'),
    exact: true
  },
  {
    path: '/book_reviews/blog/tags/hello',
    component: ComponentCreator('/book_reviews/blog/tags/hello', '001'),
    exact: true
  },
  {
    path: '/book_reviews/blog/tags/hola',
    component: ComponentCreator('/book_reviews/blog/tags/hola', '659'),
    exact: true
  },
  {
    path: '/book_reviews/blog/welcome',
    component: ComponentCreator('/book_reviews/blog/welcome', 'ef7'),
    exact: true
  },
  {
    path: '/book_reviews/markdown-page',
    component: ComponentCreator('/book_reviews/markdown-page', '26d'),
    exact: true
  },
  {
    path: '/book_reviews/docs',
    component: ComponentCreator('/book_reviews/docs', '115'),
    routes: [
      {
        path: '/book_reviews/docs',
        component: ComponentCreator('/book_reviews/docs', '4f6'),
        routes: [
          {
            path: '/book_reviews/docs',
            component: ComponentCreator('/book_reviews/docs', '525'),
            routes: [
              {
                path: '/book_reviews/docs/category/trí-tuệ-tài-chính',
                component: ComponentCreator('/book_reviews/docs/category/trí-tuệ-tài-chính', '96a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/book_reviews/docs/category/tutorial---basics',
                component: ComponentCreator('/book_reviews/docs/category/tutorial---basics', '7d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/book_reviews/docs/category/tutorial---extras',
                component: ComponentCreator('/book_reviews/docs/category/tutorial---extras', '06b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/book_reviews/docs/intro',
                component: ComponentCreator('/book_reviews/docs/intro', '7a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/book_reviews/docs/Tri-Tue-Tai-Chinh/chapter-1',
                component: ComponentCreator('/book_reviews/docs/Tri-Tue-Tai-Chinh/chapter-1', '617'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/book_reviews/docs/Tri-Tue-Tai-Chinh/chapter-2',
                component: ComponentCreator('/book_reviews/docs/Tri-Tue-Tai-Chinh/chapter-2', '022'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/book_reviews/docs/Tri-Tue-Tai-Chinh/chapter-3',
                component: ComponentCreator('/book_reviews/docs/Tri-Tue-Tai-Chinh/chapter-3', '6b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/book_reviews/docs/Tri-Tue-Tai-Chinh/markdown-features',
                component: ComponentCreator('/book_reviews/docs/Tri-Tue-Tai-Chinh/markdown-features', '9be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/book_reviews/docs/Tri-Tue-Tai-Chinh/overview',
                component: ComponentCreator('/book_reviews/docs/Tri-Tue-Tai-Chinh/overview', '2ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/book_reviews/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/book_reviews/docs/tutorial-basics/congratulations', 'b90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/book_reviews/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/book_reviews/docs/tutorial-basics/create-a-blog-post', 'f22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/book_reviews/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/book_reviews/docs/tutorial-basics/create-a-document', 'c25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/book_reviews/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/book_reviews/docs/tutorial-basics/create-a-page', '049'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/book_reviews/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/book_reviews/docs/tutorial-basics/deploy-your-site', '126'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/book_reviews/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/book_reviews/docs/tutorial-basics/markdown-features', '667'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/book_reviews/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/book_reviews/docs/tutorial-extras/manage-docs-versions', '1d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/book_reviews/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/book_reviews/docs/tutorial-extras/translate-your-site', 'c9e'),
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
    path: '/book_reviews/',
    component: ComponentCreator('/book_reviews/', '6cd'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
