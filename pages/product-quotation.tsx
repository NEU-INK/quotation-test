import React, { useState } from 'react'
// import { useRouter } from 'next/navigation'
import { useRouter } from 'next/router'
import Head from 'next/head'
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import styles from '../styles/pagesStyles/productQuotation.module.scss'
import useQuotation from '../hooks/useQuotation'

const ProductQuotation: React.FC = () => {
  const router = useRouter()
  const {
    Categories,
    everydayList,
    formalList,
    performanceList,
    medicalCompressionList,
    babyList,
    surchargeLessThan500,
    surchargeBetween500And999,
    surchargeOver1000,
  } = useQuotation()

  const [category, setCategory] = useState('')
  const [dataList, setDataList] = useState<any[]>([])
  const [materialOpt, setMaterialOpt] = useState<string[]>([])

  const setOpts = (data: any[], attr: string) => {
    const opt: string[] = []
    data.forEach((item) => {
      const val = item[attr]
      if (!opt.length || !opt.includes(val)) {
        opt.push(val)
      }
    })
    return opt
  }

  const changeCategory = (_category: string) => {
    setCategory(_category)
    const _dataList =
      _category === 'Everyday'
        ? everydayList
        : _category === 'Formal'
        ? formalList
        : _category === 'Performance'
        ? performanceList
        : _category === 'Medical Compression'
        ? medicalCompressionList
        : babyList
    setDataList(_dataList)
    if (_category === 'Baby') {
      setMaterialOpt([])
      setSizeOpt(['Baby'])
    } else {
      setMaterialOpt(setOpts(_dataList, 'Materials'))
      setSizeOpt([])
    }
    setSilhouetteOpt([])
  }

  const [material, setMaterial] = useState('')
  const [matchedMaterial, setMatchedMaterial] = useState<any[]>([])
  const [silhouetteOpt, setSilhouetteOpt] = useState<string[]>([])

  const changeMaterial = (_material: string) => {
    setMaterial(_material)
    const _matchedMaterial = dataList.filter((item) => item.Materials === _material)
    setMatchedMaterial(_matchedMaterial)
    setSilhouetteOpt(setOpts(_matchedMaterial, 'Silhouette'))
  }

  const [silhouette, setSilhouette] = useState('')
  const [matchedSilhouette, setMatchedSilhouette] = useState<any[]>([])
  const [sizeOpt, setSizeOpt] = useState<string[]>([])

  const changeSilhouette = (_silhouette: string) => {
    setSilhouette(_silhouette)
    const _matchedSilhouette = matchedMaterial.filter((item) => item.Silhouette === _silhouette)
    setMatchedSilhouette(_matchedSilhouette)
    setSizeOpt(setOpts(_matchedSilhouette, 'Size'))
  }

  const [size, setSize] = useState('')
  const [price, setPrice] = useState(0)

  const changeSize = (_size: string) => {
    // if (!size) {
    //   setQuantityContainerClass(`${styles.quantityInput}`)
    // }
    setSize(_size)
    const target = matchedSilhouette.find((item) => item.Size === _size)
    if (target) {
      setPrice(target.pricePerPair ?? 0)
    }
  }

  const maxQuantity = 999999999
  const maxQuantityTxt = `999,999,999`
  const [quantity, setQuantity] = useState<number>(0)
  // const [quantityContainerClass, setQuantityContainerClass] = useState(
  //   `${styles.quantityContainer} ${styles.quantityContainerDisabled}`
  // )

  const changeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value === '') {
      setQuantity(0)
    } else if (value.startsWith('0')) {
      if (value.includes('.')) {
        const integer = Number(value.split('.')[0])
        setQuantity(integer)
      } else {
        const _v = value.split('0')[1]
        e.target.value = _v
        setQuantity(Number(_v))
      }
    } else {
      const val = Number(value)
      val < 0 ? setQuantity(0) : val > maxQuantity ? setQuantity(maxQuantity) : setQuantity(val)
    }
  }

  const showPriview = () => {
    caculateSurcharge()
  }

  const caculateSurcharge = () => {
    const surcharge =
      quantity < 500
        ? surchargeLessThan500
        : quantity >= 500 && quantity <= 999
        ? surchargeBetween500And999
        : surchargeOver1000
    const _total = Number((price * quantity * surcharge).toFixed(2))
    // console.log(price, quantity)
    // console.log(surcharge)
    // console.log(total)
    setTotal(_total)
    // setQuotation(total)
    setQuotation([
      {
        label: 'Category',
        value: category,
      },
      {
        label: 'Material',
        value: material,
      },
      {
        label: 'Silhouette',
        value: silhouette,
      },
      {
        label: 'Size',
        value: size,
      },
      {
        label: 'Quantity',
        value: quantity,
      },
      {
        label: 'Total',
        value: `$ ${_total}`,
      },
    ])
    setDialogShow(true)
  }

  const [showDialog, setDialogShow] = useState(false)
  const [total, setTotal] = useState(0)
  const [quotation, setQuotation] = useState<any[]>([])
  // const [quotation, setQuotation] = useState(0)

  const closeDialog = (e: any, reason: string) => {
    if (reason === 'backdropClick' || reason === 'escapeKeyDown') return
    setDialogShow(false)
  }

  const confirmData = () => {
    setDialogShow(false)
    sessionStorage.setItem(
      'quotation',
      JSON.stringify({
        qcategory: category,
        qmaterial: material,
        qsilhouette: silhouette,
        qsize: size,
        qquantity: quantity,
        qtotal: total,
      })
    )
    router.push('/contact-us-quotation')
  }

  return (
    <>
      <Head>
        <title>Test</title>
        <meta
          name="description"
          content="Explore Walt Technology Group's innovative product range, including socks, body shaping garments, functional wear, and AI-driven apparel solutions."
        />

        {/* Open Graph Metadata */}
        <meta
          property="og:title"
          content="Products | Walt Tec | Advanced Sock & Apparel Solutions"
        />
        <meta
          property="og:description"
          content="Discover Walt Technology Group's advanced textile products, from seamless knitting to AI-driven apparel solutions, designed for performance and sustainability."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://walttec.shop/products/" />
        <meta property="og:image" content="https://walttec.shop/images/products.jpg" />

        {/* Twitter Cards Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Products | Walt Tec | Advanced Sock & Apparel Solutions"
        />
        <meta
          name="twitter:description"
          content="Browse our product catalog for innovative socks, functional garments, and sustainable textile solutions at Walt Technology Group."
        />
        <meta name="twitter:image" content="https://walttec.shop/images/products.jpg" />

        <link rel="canonical" href="https://walttec.shop/test/" />
        <meta name="robots" content="index,follow" />
      </Head>

      <Box className={`${styles.productQuotation}`}>
        <Typography fontSize={'9.6rem'}>Procust Quotation</Typography>

        <Box className={styles.stepContainer}>
          <Typography className={styles.stepTitle} fontSize={'3.6rem'} lineHeight={1.5}>
            Categories
          </Typography>

          <Box className={styles.optionContainer}>
            {Categories.map((item) => (
              <Box key={item} className={styles.optionItem} onClick={() => changeCategory(item)}>
                {item}
              </Box>
            ))}
          </Box>
        </Box>

        <Box className={styles.stepContainer}>
          <Typography className={styles.stepTitle} fontSize={'3.6rem'} lineHeight={1.5}>
            Materials
          </Typography>

          {!category ? (
            <Typography className={styles.stepTitle} fontSize={'2.9rem'} lineHeight={1.5}>
              先选分类
            </Typography>
          ) : category !== 'Baby' ? (
            <Box className={styles.optionContainer}>
              {materialOpt.map((item) => (
                <Box key={item} className={styles.optionItem} onClick={() => changeMaterial(item)}>
                  {item}
                </Box>
              ))}
            </Box>
          ) : (
            '该分类无材质'
          )}
        </Box>

        <Box className={styles.stepContainer}>
          <Typography className={styles.stepTitle} fontSize={'3.6rem'} lineHeight={1.5}>
            Silhouette
          </Typography>

          {!material ? (
            <Typography className={styles.stepTitle} fontSize={'2.9rem'} lineHeight={1.5}>
              先选材质
            </Typography>
          ) : category !== 'Baby' ? (
            <Box className={styles.optionContainer}>
              {silhouetteOpt.map((item) => (
                <Box
                  key={item}
                  className={styles.optionItem}
                  onClick={() => changeSilhouette(item)}
                >
                  {item}
                </Box>
              ))}
            </Box>
          ) : (
            '该分类无材质'
          )}
        </Box>

        <Box className={styles.stepContainer}>
          <Typography className={styles.stepTitle} fontSize={'3.6rem'} lineHeight={1.5}>
            Size
          </Typography>

          {!category ? (
            <Typography className={styles.stepTitle} fontSize={'2.9rem'} lineHeight={1.5}>
              先选分类
            </Typography>
          ) : category === 'Baby' ? (
            <Box className={styles.optionItem} onClick={() => changeSize('Baby')}>
              Baby
            </Box>
          ) : !material || !silhouette ? (
            <Typography className={styles.stepTitle} fontSize={'2.9rem'} lineHeight={1.5}>
              先选材质和Silhouette
            </Typography>
          ) : (
            <Box className={styles.optionContainer}>
              {sizeOpt.map((item) => (
                <Box key={item} className={styles.optionItem} onClick={() => changeSize(item)}>
                  {item}
                </Box>
              ))}
            </Box>
          )}
        </Box>

        <Box className={styles.stepContainer}>
          <Typography className={styles.stepTitle} fontSize={'3.6rem'} lineHeight={1.5}>
            Quantity
          </Typography>

          <Box>
            <input
              type="number"
              className={styles.quantityInput}
              min={0}
              max={maxQuantity}
              value={quantity}
              onChange={changeQuantity}
            />
          </Box>

          <Typography className={styles.stepTitle} fontSize={'2rem'} lineHeight={1.5}>
            Greater than 0 and less than {maxQuantityTxt}
          </Typography>
        </Box>

        <Button
          style={{
            fontFamily: 'HS',
            fontSize: '3rem',
          }}
          onClick={showPriview}
        >
          Priview
        </Button>
      </Box>

      <Dialog
        maxWidth={'lg'}
        sx={{
          '& .MuiPaper-root': {
            width: '50%',
            minWidth: '400px',
          },
        }}
        open={showDialog}
        onClose={closeDialog}
      >
        <DialogTitle>QUOTATION</DialogTitle>
        <Box className={styles.dialogContent}>
          <List
            sx={{
              padding: 0,
              '& .MuiListItem-root': {
                padding: '4px',
                '& .MuiListItemText-root ': {
                  width: '50%',
                  '.MuiTypography-root': {
                    fontSize: '2.4rem',
                  },
                },
              },
            }}
          >
            {quotation.map((item) => (
              <ListItem key={item.label}>
                <ListItemText primary={item.label} />
                <ListItemText primary={item.value} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box className={styles.dialogFooter}>
          <Button
            style={{
              fontFamily: 'HS',
              fontSize: '2.9rem',
            }}
            onClick={() => setDialogShow(false)}
          >
            Cancel
          </Button>
          <Button
            style={{
              fontFamily: 'HS',
              fontSize: '2.9rem',
            }}
            onClick={confirmData}
          >
            Contact Us
          </Button>
        </Box>
      </Dialog>
    </>
  )
}

export default ProductQuotation
