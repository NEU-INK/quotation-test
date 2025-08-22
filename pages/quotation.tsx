import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import { Box, Typography, Dialog, DialogTitle, List, ListItem, ListItemText } from '@mui/material'
import styles from '../styles/pagesStyles/quotation.module.scss'
import { useDevice } from '../utils/deviceContext'
import useQuotation from '../hooks/useQuotation'
import { setNumber } from '../utils/common'
import WaltButton from '../components/Smart/WaltButton/WaltButton'

const ProductQuotation: React.FC = () => {
  const router = useRouter()

  const { isMobile } = useDevice()

  const {
    titleTxt,
    Categories,
    everydayList,
    formalList,
    performanceList,
    medicalCompressionList,
    babyList,
    surchargeLessThan500,
    surchargeBetween500And999,
    surchargeOver1000,
    categoryTip,
    materialTip,
    silhouetteTip,
    sizeTip,
    quantityTip,
    setOpts,
    formatNumber,
  } = useQuotation()

  const [category, setCategory] = useState('')
  const [dataList, setDataList] = useState<any[]>([])

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
      setMaterial('/')
      setSilhouette('/')
      setSizeOpt(['Baby'])
    } else {
      setMaterial('')
      setMaterialOpt(setOpts(_dataList, 'Materials'))
      setSilhouette('')
      setSizeOpt([])
    }
    setSize('')
    setSilhouetteOpt([])
  }

  const [material, setMaterial] = useState('')
  const [materialOpt, setMaterialOpt] = useState<string[]>([])
  const [matchedMaterial, setMatchedMaterial] = useState<any[]>([])

  const changeMaterial = (_material: string) => {
    setMaterial(_material)
    const _matchedMaterial = dataList.filter((item) => item.Materials === _material)
    setMatchedMaterial(_matchedMaterial)
    setSilhouetteOpt(setOpts(_matchedMaterial, 'Silhouette'))
    setSilhouette('')
    setSize('')
    setSizeOpt([])
  }

  const [silhouette, setSilhouette] = useState('')
  const [silhouetteOpt, setSilhouetteOpt] = useState<string[]>([])
  const [matchedSilhouette, setMatchedSilhouette] = useState<any[]>([])

  const changeSilhouette = (_silhouette: string) => {
    setSilhouette(_silhouette)
    const _matchedSilhouette = matchedMaterial.filter((item) => item.Silhouette === _silhouette)
    setMatchedSilhouette(_matchedSilhouette)
    setSizeOpt(setOpts(_matchedSilhouette, 'Size'))
    setSize('')
  }

  const [size, setSize] = useState('')
  const [sizeOpt, setSizeOpt] = useState<string[]>([])
  const [price, setPrice] = useState(0)

  const changeSize = (_size: string) => {
    setSize(_size)
    const target = matchedSilhouette.find((item) => item.Size === _size)
    if (target) {
      setPrice(target.pricePerPair ?? 0)
    }
  }

  const maxQuantity = 999999999
  const maxQuantityTxt = `999,999,999`
  const [quantity, setQuantity] = useState<number>(0)

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
    if (!category) {
      setTipDialogMsg(categoryTip)
      setTipDialogShow(true)
      return
    } else if (!material && category !== 'Baby') {
      setTipDialogMsg(materialTip)
      setTipDialogShow(true)
      return
    } else if (!silhouette && category !== 'Baby') {
      setTipDialogMsg(silhouetteTip)
      setTipDialogShow(true)
      return
    } else if (!size) {
      setTipDialogMsg(sizeTip)
      setTipDialogShow(true)
      return
    } else if (quantity === 0) {
      setTipDialogMsg(quantityTip)
      setTipDialogShow(true)
      return
    }
    caculateSurcharge()
  }

  const [showTipDialog, setTipDialogShow] = useState(false)
  const [tipDialogMsg, setTipDialogMsg] = useState('')

  const caculateSurcharge = () => {
    const surcharge =
      quantity < 500
        ? surchargeLessThan500
        : quantity >= 500 && quantity <= 999
        ? surchargeBetween500And999
        : surchargeOver1000
    const _total = setNumber(price * quantity * surcharge)
    setTotal(_total)
    category !== 'Baby'
      ? setQuotation([
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
            label: 'Quantity(Pair)',
            value: formatNumber(quantity),
          },
          {
            label: 'Total',
            value: `$ ${formatNumber(_total)}`,
          },
        ])
      : setQuotation([
          {
            label: 'Category',
            value: category,
          },
          {
            label: 'Size',
            value: size,
          },
          {
            label: 'Quantity(Pair)',
            value: formatNumber(quantity),
          },
          {
            label: 'Total',
            value: `$ ${formatNumber(_total)}`,
          },
        ])
    setPreviewDialogShow(true)
  }

  const [showPreviewDialog, setPreviewDialogShow] = useState(false)
  const [total, setTotal] = useState(0)
  const [quotation, setQuotation] = useState<any[]>([])

  const closeDialog = (e: any, reason: string) => {
    if (reason === 'backdropClick' || reason === 'escapeKeyDown') return
    setPreviewDialogShow(false)
  }

  const confirmData = () => {
    setPreviewDialogShow(false)
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
        <title>Quotation</title>
        <meta
          name="description"
          content="Explore Walt Technology Group's innovative product range, including socks, body shaping garments, functional wear, and AI-driven apparel solutions."
        />

        {/* Open Graph Metadata */}
        <meta
          property="og:title"
          content="Quotation | Walt Tec | Advanced Sock & Apparel Solutions"
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
          content="Quotation | Walt Tec | Advanced Sock & Apparel Solutions"
        />
        <meta
          name="twitter:description"
          content="Browse our product catalog for innovative socks, functional garments, and sustainable textile solutions at Walt Technology Group."
        />
        <meta name="twitter:image" content="https://walttec.shop/images/products.jpg" />

        <link rel="canonical" href="https://walttec.shop/quotation/" />
        <meta name="robots" content="index,follow" />
      </Head>

      <Box position="relative" width="100%" height="100%">
        <Image
          src="/images/quotation/banner.jpg"
          alt={`image-quotation`}
          width={1920}
          height={1080}
          style={{ width: '100%', height: 'auto' }}
        />
        <Box position="absolute" bottom="15%" left="6%" color="white">
          <Typography
            fontSize={`${isMobile ? '4rem' : '8.2rem'}`}
            lineHeight={1}
            fontWeight={800}
            style={{ fontWeight: 'bold' }}
          >
            {titleTxt.txt1}
            <br />
            {titleTxt.txt2}
            <br />
            {titleTxt.txt3}
          </Typography>
        </Box>
      </Box>

      <Box className={`${styles.productQuotation}`}>
        <Box className={styles.stepContainer}>
          <Typography className={styles.stepTitle} fontSize={'3.6rem'} lineHeight={1.5}>
            Categories
          </Typography>

          <Box className={styles.optionContainer}>
            {Categories.map((item) => (
              <Box
                key={item}
                className={
                  category === item
                    ? `${styles.optionItem} ${styles.optionItemSelected}`
                    : styles.optionItem
                }
                onClick={() => changeCategory(item)}
              >
                {item}
              </Box>
            ))}
          </Box>
        </Box>

        {category !== 'Baby' && (
          <Box className={styles.stepContainer}>
            <Typography className={styles.stepTitle} fontSize={'3.6rem'} lineHeight={1.5}>
              Materials
            </Typography>

            {!category ? (
              <Typography className={styles.stepTip} fontSize={'2.9rem'} lineHeight={1.5}>
                {categoryTip}
              </Typography>
            ) : (
              <Box className={styles.optionContainer}>
                {materialOpt.map((item) => (
                  <Box
                    key={item}
                    className={
                      material === item
                        ? `${styles.optionItem} ${styles.optionItemMaterialSelected}`
                        : `${styles.optionItem} ${styles.optionItemMaterial}`
                    }
                    height="15rem"
                    sx={{
                      backgroundImage:
                        item !== 'Bamboo Fiber'
                          ? `url(/images/quotation/${item}.jpg)`
                          : 'url(/images/quotation/bambooFiber.jpg)',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                    onClick={() => changeMaterial(item)}
                  >
                    {item}
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        )}

        {category !== 'Baby' && (
          <Box className={styles.stepContainer}>
            <Typography className={styles.stepTitle} fontSize={'3.6rem'} lineHeight={1.5}>
              Silhouette
            </Typography>

            {!material ? (
              <Typography className={styles.stepTip} fontSize={'2.9rem'} lineHeight={1.5}>
                {materialTip}
              </Typography>
            ) : (
              <Box className={styles.optionContainer}>
                {silhouetteOpt.map((item) => (
                  <Box
                    key={item}
                    className={
                      silhouette === item
                        ? `${styles.optionItem} ${styles.optionItemSelected}`
                        : styles.optionItem
                    }
                    onClick={() => changeSilhouette(item)}
                  >
                    {item}
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        )}

        <Box className={styles.stepContainer}>
          <Typography className={styles.stepTitle} fontSize={'3.6rem'} lineHeight={1.5}>
            Size
          </Typography>

          {!category ? (
            <Typography className={styles.stepTip} fontSize={'2.9rem'} lineHeight={1.5}>
              {categoryTip}
            </Typography>
          ) : category === 'Baby' ? (
            <Box
              className={
                size === 'Baby'
                  ? `${styles.optionItem} ${styles.optionItemSelected}`
                  : styles.optionItem
              }
              onClick={() => changeSize('Baby')}
            >
              Baby
            </Box>
          ) : !material || !silhouette ? (
            <Typography className={styles.stepTip} fontSize={'2.9rem'} lineHeight={1.5}>
              Please select material and silhouette
            </Typography>
          ) : (
            <Box className={styles.optionContainer}>
              {sizeOpt.map((item) => (
                <Box
                  key={item}
                  className={
                    size === item
                      ? `${styles.optionItem} ${styles.optionItemSelected}`
                      : styles.optionItem
                  }
                  onClick={() => changeSize(item)}
                >
                  {item}
                </Box>
              ))}
            </Box>
          )}
        </Box>

        <Box className={styles.stepContainer}>
          <Typography className={styles.stepTitle} fontSize={'3.6rem'} lineHeight={1.5}>
            Quantity(Pair)
          </Typography>

          <Box>
            <input
              id="quantity"
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

        <Box className={styles.optionBtns}>
          <WaltButton
            text={'PREVIEW'}
            onClick={showPriview}
            borderColor="var(--base-blue)"
            textColor="var(--base-blue)"
            hoverBackgroundColor="var(--base-blue)"
            hoverBorderColor="var(--base-blue)"
            hoverTextColor="white"
            activeBackgroundColor="var(--base-blue)"
            activeBorderColor="var(--base-blue)"
            activeTextColor="white"
            style={{
              // width: '50%',
              margin: '0 auto',
              fontSize: `${isMobile ? '2rem' : '2.76rem'}`,
            }}
          />
        </Box>
      </Box>

      <Dialog
        maxWidth={'lg'}
        sx={{
          '& .MuiPaper-root': {
            width: '50%',
            minWidth: '400px',
            textAlign: 'center',
          },
        }}
        open={showTipDialog}
        onClose={() => setTipDialogShow(false)}
      >
        <Box className={styles.dialogContent}>
          <Typography
            fontSize={`${isMobile ? '2rem' : '2.76rem'}`}
            lineHeight={1.5}
            className={styles.stepTitle}
          >
            {tipDialogMsg}
          </Typography>
        </Box>
      </Dialog>

      <Dialog
        maxWidth={'lg'}
        sx={{
          '& .MuiPaper-root': {
            width: '12rem',
            minWidth: '400px',
            textAlign: 'center',
          },
        }}
        open={showPreviewDialog}
        onClose={closeDialog}
      >
        <DialogTitle
          sx={{
            fontSize: '3.6rem',
            fontFamily: 'HS',
            fontWeight: 'bold',
            color: 'var(--base-blue)',
          }}
        >
          QUOTATION
        </DialogTitle>
        <Box className={styles.dialogContent}>
          <List
            sx={{
              padding: 0,
              '& .MuiListItem-root': {
                marginBottom: '3rem',
                borderBottom: '1px solid var(--base-blue)',
                padding: '4px',
                '& .MuiListItemText-root': {
                  maxHeight: '50%',
                  color: 'var(--base-blue)',
                  '&:first-of-type': {
                    width: '5rem',
                    span: {
                      fontWeight: 700,
                    },
                  },
                  '&:last-of-type': {
                    // width: 'calc(100% - 17rem)',
                    textAlign: 'right',
                  },
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
          <WaltButton
            text={'Cancel'}
            onClick={() => setPreviewDialogShow(false)}
            borderColor="var(--base-blue)"
            textColor="var(--base-blue)"
            hoverBackgroundColor="var(--base-blue)"
            hoverBorderColor="var(--base-blue)"
            hoverTextColor="white"
            activeBackgroundColor="var(--base-blue)"
            activeBorderColor="var(--base-blue)"
            activeTextColor="white"
            style={{
              fontSize: `${isMobile ? '2rem' : '2.76rem'}`,
            }}
          />
          <WaltButton
            text={'Contact Us'}
            borderColor="var(--base-blue)"
            textColor="var(--base-blue)"
            hoverBackgroundColor="var(--base-blue)"
            hoverBorderColor="var(--base-blue)"
            hoverTextColor="white"
            activeBackgroundColor="var(--base-blue)"
            activeBorderColor="var(--base-blue)"
            activeTextColor="white"
            style={{
              fontSize: `${isMobile ? '2rem' : '2.76rem'}`,
            }}
            onClick={confirmData}
          />
        </Box>
      </Dialog>
    </>
  )
}

export default ProductQuotation
