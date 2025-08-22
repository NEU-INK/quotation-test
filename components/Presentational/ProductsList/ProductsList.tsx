import React, { useState } from 'react'
import { Typography, Box, Button, MenuItem, IconButton, Breadcrumbs, Link } from '@mui/material'
import { ArrowUpward, ArrowDownward } from '@mui/icons-material'
import styles from './ProductsList.module.scss'
import { useDevice } from '../../../utils/deviceContext'
// import Image from "next/image";

const isNav = false
const isSX = false
// 示例产品数据
const products = [
  {
    id: 1,
    title: '85533',
    price: '',
    image: '/images/products/products-list/product-item16.png',
    description: '',
    category: 'WHOLESALE',
    subcategory: '',
    url: 'https://www.neu-ink.com/pages/b2b-wholesale',
  },
  {
    id: 2,
    title: '85546-7-8',
    price: '',
    image: '/images/products/products-list/product-item17.png',
    description: '',
    category: 'WHOLESALE',
    subcategory: '',
    url: 'https://www.neu-ink.com/pages/b2b-wholesale',
  },
  {
    id: 3,
    title: '85542-3-4',
    price: '',
    image: '/images/products/products-list/product-item18.png',
    description: '',
    category: 'WHOLESALE',
    subcategory: '',
    url: 'https://www.neu-ink.com/pages/b2b-wholesale',
  },

  {
    id: 4,
    title: 'MSK609',
    price: '',
    image: '/images/products/products-list/product-item19.png',
    description: '',
    category: 'WHOLESALE',
    subcategory: '',
    url: 'https://www.neu-ink.com/pages/b2b-wholesale',
  },
  {
    id: 5,
    title: 'R00401-NC(Purple)',
    price: '',
    image: '/images/products/products-list/product-item20.png',
    description: '',
    category: 'WHOLESALE',
    subcategory: '',
    url: 'https://www.neu-ink.com/pages/b2b-wholesale',
  },
  {
    id: 6,
    title: 'R00401-NC(Pink)',
    price: '',
    image: '/images/products/products-list/product-item29.png',
    description: '',
    category: 'WHOLESALE',
    subcategory: '',
    url: 'https://www.neu-ink.com/pages/b2b-wholesale',
  },
  {
    id: 7,
    title: 'R00401-NC(Green)',
    price: '',
    image: '/images/products/products-list/product-item21.png',
    description: '',
    category: 'WHOLESALE',
    subcategory: '',
    url: 'https://www.neu-ink.com/pages/b2b-wholesale',
  },
  {
    id: 8,
    title: 'R00401-NC(Blue)',
    price: '',
    image: '/images/products/products-list/product-item22.png',
    description: '',
    category: 'WHOLESALE',
    subcategory: '',
    url: 'https://www.neu-ink.com/pages/b2b-wholesale',
  },
  {
    id: 9,
    title: 'FLC0041(Red)',
    price: '',
    image: '/images/products/products-list/product-item23.png',
    description: '',
    category: 'WHOLESALE',
    subcategory: '',
    url: 'https://www.neu-ink.com/pages/b2b-wholesale',
  },
  {
    id: 10,
    title: 'FLC0041(Green)',
    price: '',
    image: '/images/products/products-list/product-item24.png',
    description: '',
    category: 'WHOLESALE',
    subcategory: '',
    url: 'https://www.neu-ink.com/pages/b2b-wholesale',
  },
  {
    id: 11,
    title: 'R329(White)',
    price: '',
    image: '/images/products/products-list/product-item25.png',
    description: '',
    category: 'WHOLESALE',
    subcategory: '',
    url: 'https://www.neu-ink.com/pages/b2b-wholesale',
  },
  {
    id: 12,
    title: 'R329 (Grey Blue)',
    price: '',
    image: '/images/products/products-list/product-item26.png',
    description: '',
    category: 'WHOLESALE',
    subcategory: '',
    url: 'https://www.neu-ink.com/pages/b2b-wholesale',
  },
  {
    id: 13,
    title: 'R329 (Black Red)',
    price: '',
    image: '/images/products/products-list/product-item27.png',
    description: '',
    category: 'WHOLESALE',
    subcategory: '',
    url: 'https://www.neu-ink.com/pages/b2b-wholesale',
  },
  {
    id: 14,
    title: 'LN13P01',
    price: '',
    image: '/images/products/products-list/product-item28.png',
    description: '',
    category: 'CLOSEOUT',
    subcategory: '',
    url: 'https://www.neu-ink.com/pages/b2b-wholesale',
  },
  {
    id: 15,
    title: 'LN13P01',
    price: '',
    image: '/images/products/products-list/product-item1.png',
    description: '',
    category: 'CLOSEOUT',
    subcategory: '',
    url: 'https://www.neu-ink.com/pages/b2b-wholesale',
  },
  {
    id: 16,
    title: 'LN13P04',
    price: '',
    image: '/images/products/products-list/product-item2.png',
    description: '',
    category: 'CLOSEOUT',
    subcategory: '',
    url: 'https://www.neu-ink.com/pages/b2b-wholesale',
  },
  {
    id: 17,
    title: 'LN13P05',
    price: '',
    image: '/images/products/products-list/product-item3.png',
    description: '',
    category: 'CLOSEOUT',
    subcategory: '',
    url: 'https://www.neu-ink.com/pages/b2b-wholesale',
  },
  {
    id: 18,
    title: 'LN13P06',
    price: '',
    image: '/images/products/products-list/product-item4.png',
    description: '',
    category: 'CLOSEOUT',
    subcategory: '',
    url: 'https://www.neu-ink.com/pages/b2b-wholesale',
  },
  {
    id: 19,
    title: 'LN13P07',
    price: '',
    image: '/images/products/products-list/product-item5.png',
    description: '',
    category: 'CLOSEOUT',
    subcategory: '',
    url: 'https://www.neu-ink.com/pages/b2b-wholesale',
  },
  {
    id: 20,
    title: 'LN13P07',
    price: '',
    image: '/images/products/products-list/product-item6.png',
    description: '',
    category: 'CLOSEOUT',
    subcategory: '',
    url: 'https://www.neu-ink.com/pages/b2b-wholesale',
  },
  {
    id: 21,
    title: 'LN13P07',
    price: '',
    image: '/images/products/products-list/product-item7.png',
    description: '',
    category: 'CLOSEOUT',
    subcategory: '',
    url: 'https://www.neu-ink.com/pages/b2b-wholesale',
  },
  {
    id: 22,
    title: 'LN13P09-16',
    price: '',
    image: '/images/products/products-list/product-item8.png',
    description: '',
    category: 'CLOSEOUT',
    subcategory: '',
    url: 'https://www.neu-ink.com/pages/b2b-wholesale',
  },
  {
    id: 23,
    title: 'LN13P12',
    price: '',
    image: '/images/products/products-list/product-item9.png',
    description: '',
    category: 'CLOSEOUT',
    subcategory: '',
    url: 'https://www.neu-ink.com/pages/b2b-wholesale',
  },
  {
    id: 24,
    title: 'LN13P12',
    price: '',
    image: '/images/products/products-list/product-item10.png',
    description: '',
    category: 'CLOSEOUT',
    subcategory: '',
    url: 'https://www.neu-ink.com/pages/b2b-wholesale',
  },
  {
    id: 25,
    title: 'LN22P11',
    price: '',
    image: '/images/products/products-list/product-item11.png',
    description: '',
    category: 'CLOSEOUT',
    subcategory: '',
    url: 'https://www.neu-ink.com/pages/b2b-wholesale',
  },
  {
    id: 26,
    title: 'LN22P11-C-M',
    price: '',
    image: '/images/products/products-list/product-item12.png',
    description: '',
    category: 'CLOSEOUT',
    subcategory: '',
    url: 'https://www.neu-ink.com/pages/b2b-wholesale',
  },
  {
    id: 27,
    title: 'LN13C01-A-2',
    price: '',
    image: '/images/products/products-list/product-item13.png',
    description: '',
    category: 'CLOSEOUT',
    subcategory: '',
    url: 'https://www.neu-ink.com/pages/b2b-wholesale',
  },
  {
    id: 28,
    title: 'BK07X035.White.10-13',
    price: '',
    image: '/images/products/products-list/product-item14.png',
    description: '',
    category: 'CLOSEOUT',
    subcategory: '',
    url: 'https://www.neu-ink.com/pages/b2b-wholesale',
  },
  {
    id: 29,
    title: 'BK07X108.FireDragon.10-13.B1',
    price: '',
    image: '/images/products/products-list/product-item15.png',
    description: '',
    category: 'CLOSEOUT',
    subcategory: '',
    url: 'https://www.neu-ink.com/pages/b2b-wholesale',
  },

  //
  // {
  //     id: 41,
  //     title: "No Show Potato Socks",
  //     price: "$7.99",
  //     image: "/images/products/socks1.png",
  //     description: "The design is inspired by the irregular shape of potatoes. The one-piece design can wrap different foot shapes. The socks are comfortable to wear and will not fall off. The fabric is breathable and can effectively prevent abrasions and blisters.",
  //     category: "Socks",
  //     subcategory: "No Show Socks",
  //     url:'https://www.neu-ink.com/products/no-show-bamboo-potato-socks'
  // },
  // {
  //     id: 42,
  //     title: "Men's Cycling Jersey-Natural",
  //     price: "$29.99",
  //     image: "/images/products/jersey1.png",
  //     description: "Fabrics with excellent stretch and elasticity make the movement of clothing comfortable and flexible. Give you a comfortable riding experience and feeling. ",
  //     category: "Cycling Jersey",
  //     subcategory: "Men's Cycling Jersey",
  //     url: 'https://www.neu-ink.com/products/mens-cycling-jersey-natural'
  // },
  // {
  //     id: 43,
  //     title: "Men's Printed Cycling Jersey-Bright",
  //     price: "$29.99",
  //     image: "/images/products/jersey2.png",
  //     description: "Fabrics with excellent stretch and elasticity make the movement of clothing comfortable and flexible. Give you a comfortable riding experience and feeling. ",
  //     category: "Cycling Jersey",
  //     subcategory: "Men's Cycling Jersey",
  //     url: 'https://www.neu-ink.com/products/mens-printed-cycling-jersey-bright'
  // },
  // {
  //     id: 44,
  //     title: "Forest Elves",
  //     price: "$14.99",
  //     image: "/images/products/vest1.png",
  //     description: "The total weight is just 36-45g, roughly 1/5th the weight of an ordinary sports vest, ensuring no burden during exercise. The mesh fabric enhances heat dissipation, keeping you dry and comfortable. Reflective printing increases visibility during night runs, while the exquisite heat transfer label reflects a high-quality lifestyle. This vest is also low-carbon and environmentally friendly.",
  //     category: "Vest",
  //     subcategory: 'Women\'s Lightweight Vest',
  //     url:'https://www.neu-ink.com/products/forest-elves'
  // },
]

// 一级和二级菜单选项
const categories = [
  // { category: 'All', subcategories: [] },
  { category: 'WHOLESALE', subcategories: [] },
  { category: 'CLOSEOUT', subcategories: [] },
  { category: 'SPORTS SOCKS', subcategories: [] },
  { category: 'EVERYDAY SOCKS', subcategories: [] },
  { category: 'MEDICAL SOCKS', subcategories: [] },
  // { category: 'Socks', subcategories: ['No Show Socks'] },
  // { category: 'Cycling Jersey', subcategories: ['Men\'s Cycling Jersey'] },
  // { category: 'Vest', subcategories: ['Women\'s Lightweight Vest'] },
  // { category: 'SHAPEWEAR', subcategories: [] }
]

const ProductsList: React.FC = () => {
  const { isMobile } = useDevice()

  const [selectedCategory, setSelectedCategory] = useState('WHOLESALE')
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null)
  const [showSubcategories, setShowSubcategories] = useState(false)
  const [sortOption, setSortOption] = useState({ field: 'price', order: 'asc' })

  // 过滤和排序产品
  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory
    const subcategoryMatch = !selectedSubcategory || product.subcategory === selectedSubcategory
    return categoryMatch && subcategoryMatch
  })

  const sortedProducts = filteredProducts.sort((a, b) => {
    const priceA = parseFloat(a.price.replace('$', ''))
    const priceB = parseFloat(b.price.replace('$', ''))
    return sortOption.order === 'asc' ? priceA - priceB : priceB - priceA
  })

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
    setSelectedSubcategory(null) // 重置子类别
    setShowSubcategories(true) // 显示子类别
  }
  // {/*onMouseEnter={() => handleCategoryClick(category.category)} // 鼠标悬停显示子类*/}
  //
  // {/*onClick={() => handleSubcategoryClick(subcategory)} // 选择子类*/}
  // const handleSubcategoryClick = (subcategory: string) => {
  //     setSelectedSubcategory(subcategory);
  //     setShowSubcategories(false); // 隐藏子类别
  // };

  const handleMouseLeave = () => setShowSubcategories(false) // 鼠标离开时隐藏子类别

  // 面包屑导航
  const BreadcrumbsNav = () => (
    <Breadcrumbs separator=">" aria-label="breadcrumb" className={styles.Breadcrumbs}>
      <Link
        onClick={() => handleCategoryClick('All')}
        underline="hover"
        color={selectedCategory === 'All' ? 'text.primary' : 'inherit'}
      >
        All
      </Link>

      {selectedCategory !== 'All' && (
        <>
          {/*<Link onClick={() => handleCategoryClick(selectedCategory)} underline="hover" color={selectedSubcategory ? 'inherit' : 'text.primary'}>*/}
          {/*    {selectedCategory}*/}
          {/*</Link>*/}
          <Button onClick={() => handleCategoryClick(selectedCategory)}>{selectedCategory}</Button>
          {selectedSubcategory && (
            <Typography color="text.primary">{selectedSubcategory}</Typography>
          )}
        </>
      )}
    </Breadcrumbs>
  )

  // 渲染产品网格
  const ProductGrid = () => (
    <Box className={styles.ProductGrid}>
      {sortedProducts.map((product: any, key: number) => (
        <Box
          key={key}
          style={{ cursor: 'pointer' }}
          onClick={() => (window.location.href = product.url)}
        >
          <Box key={product.id} className={styles.ProductCard}>
            <Box className={styles.ProductImage}>
              <img src={product.image} alt={product.title} />
              <Box className={styles.ProductDescription}>
                <Typography fontSize={'2.2rem'}>{product.description}</Typography>
              </Box>
            </Box>
            <Box className={styles.ProductInfo}>
              <Typography className={styles.ProductTitle} fontSize={'2.9rem'} fontWeight={'bold'}>
                {product.title}
              </Typography>

              <Typography fontSize={'2.2rem'} noWrap fontWeight={'bold'}>
                {product.price}
              </Typography>
              <Box style={{ display: 'flex', justifyContent: 'end' }}>
                <Button variant="outlined" className={styles.OrderButton}>
                  Place Order
                </Button>
                {/*<Button variant="outlined" className={styles.OrderButton}>*/}
                {/*    Place Order*/}
                {/*</Button>*/}
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )

  return (
    <Box className={styles.Box}>
      <Box className={styles.BoxTitle}>
        <Typography
          lineHeight={1}
          fontSize={`${isMobile ? '4rem' : '9.6rem'}`}
          fontWeight={800}
          fontFamily={'HC'}
          color={'var(--base-blue)'}
        >
          PRODUCTS
        </Typography>
      </Box>

      <Box className={styles.CategoryMenu} onMouseLeave={handleMouseLeave}>
        {categories.map((category, index) => (
          <Box key={category.category}>
            <Box
              onClick={() => handleCategoryClick(category.category)} // 鼠标悬停显示子类
              sx={{
                fontSize: '2.76rem',
                fontFamily: 'HS',
                lineHeight: 2,
                cursor: 'pointer',
                borderRadius: `${
                  index === 0
                    ? '10px 0 0 10px'
                    : `${index === categories.length - 1 ? '0 10px 10px 0' : ''}`
                }`,
                fontWeight: 800,
                padding: '0.4rem 4rem',
                background: `${
                  selectedCategory === category.category ? 'var(--base-blue)' : '#ffffff'
                }`,
                color: `${selectedCategory === category.category ? '#fff' : 'var(--base-blue)'}`,
              }}
            >
              {category.category}
            </Box>
            {selectedCategory === category.category &&
              showSubcategories &&
              category.subcategories.length > 0 && (
                <Box className={styles.SubcategoryMenu}>
                  {category.subcategories.map((subcategory) => (
                    // onClick={() => handleSubcategoryClick(subcategory)} // 选择子类
                    <MenuItem
                      key={subcategory}
                      className={`${
                        selectedSubcategory === subcategory ? styles.SelectedSubcategory : ''
                      } ${styles.btnZ}`}
                      sx={{
                        fontSize: '2.6rem',
                        fontWeight: 400,
                        color: 'var(--base-blue)',
                        borderRadius: '5%',
                        padding: '0.4rem 4rem',
                      }}
                    >
                      {subcategory}
                    </MenuItem>
                  ))}
                </Box>
              )}
          </Box>
        ))}
      </Box>

      {isNav && <BreadcrumbsNav />}
      {isSX && (
        <Box className={styles.SortOptions}>
          <IconButton
            onClick={() =>
              setSortOption({ field: 'price', order: sortOption.order === 'asc' ? 'desc' : 'asc' })
            }
          >
            {sortOption.order === 'asc' ? <ArrowUpward /> : <ArrowDownward />}
            按价格排序
          </IconButton>
          <IconButton
            onClick={() =>
              setSortOption({ field: 'name', order: sortOption.order === 'asc' ? 'desc' : 'asc' })
            }
          >
            {sortOption.order === 'asc' ? <ArrowUpward /> : <ArrowDownward />}
            按名称排序
          </IconButton>
        </Box>
      )}
      <ProductGrid />
    </Box>
  )
}

export default ProductsList
