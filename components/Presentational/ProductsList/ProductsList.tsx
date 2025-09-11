import React, { useState } from 'react'
import { Typography, Box, Button, MenuItem, IconButton, Breadcrumbs, Link } from '@mui/material'
import { ArrowUpward, ArrowDownward } from '@mui/icons-material'
import styles from './ProductsList.module.scss'
import { useDevice } from '../../../utils/deviceContext'
import { products } from '../../../constants/products'
// import Image from "next/image";

const isNav = false
const isSX = false

// 一级和二级菜单选项
const categories = [
  // { category: 'All', subcategories: [] },
  { category: 'WHOLESALE', subcategories: [] },
  { category: 'Socks', subcategories: [] },
  { category: 'Graphic T-SHRIT', subcategories: [] },
  { category: 'Performance', subcategories: [] },
  { category: 'Shapewear', subcategories: [] },

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
  const ProductGrid = () =>
    sortedProducts.length ? (
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
    ) : (
      <Typography
        lineHeight={1}
        fontSize={`${isMobile ? '2.9rem' : '4.8rem'}`}
        fontWeight={800}
        fontFamily={'HC'}
        color={'var(--base-blue)'}
      >
        There are no products available temporarily.
      </Typography>
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
