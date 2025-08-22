// import React, { useEffect } from 'react';
// import Script from 'next/script';
// import styles from './HubSpotForm.module.scss';
//
// const HubSpotForm: React.FC = () => {
//     useEffect(() => {
//         const loadHubSpotForm = () => {
//             if (typeof window !== 'undefined' && (window as any).hbspt) {
//                 (window as any).hbspt.forms.create({
//                     portalId: '47318811',
//                     formId: '6063138d-af39-4950-adae-8736ff3172ef',
//                     target: '#hubspot-form-container',
//                 });
//             }
//         };
//
//         loadHubSpotForm();
//     }, []);
//
//     return (
//         <>
//             {/* 加载 HubSpot 脚本 */}
//             <Script
//                 src="//js.hsforms.net/forms/embed/v2.js"
//                 strategy="afterInteractive"
//                 onLoad={() => {
//                     if (typeof window !== 'undefined' && (window as any).hbspt) {
//                         (window as any).hbspt.forms.create({
//                             portalId: '47318811',
//                             formId: '6063138d-af39-4950-adae-8736ff3172ef',
//                             target: '#hubspot-form-container',
//                         });
//                     }
//                 }}
//             />
//             {/* 表单容器 */}
//             <div id="hubspot-form-container" className={styles.formContainer} />
//         </>
//     );
// };
//
// export default HubSpotForm;

/*
import React, { useEffect, useCallback } from 'react';
import Script from 'next/script';
import styles from './HubSpotForm.module.scss';

const HubSpotForm: React.FC = () => {
    // 用于在 iframe 中插入样式
    const insertStyleSheet = useCallback(() => {
        // const iframeDoc = document.querySelector('#hubspot-form-container iframe')?.contentDocument;
        const iframe = document.querySelector('#hubspot-form-container iframe') as HTMLIFrameElement | null;
        const iframeDoc = iframe?.contentDocument;

        if (iframeDoc) {
            const style = iframeDoc.createElement('style');
            style.innerHTML = `
                label {
                    height: auto;
                }
                span, input, textarea, select {
                    font-size: 24px !important;
                    line-height: 1.5 !important;
                }
                legend {
                    font-size: 18px !important;
                }
                select {
                    padding: 0 10px !important;
                }
            `;
            iframeDoc.head.appendChild(style);
        }
    }, []);

    useEffect(() => {
        const loadHubSpotForm = () => {
            if (typeof window !== 'undefined' && (window as any).hbspt) {
                (window as any).hbspt.forms.create({
                    portalId: '47318811',
                    formId: '6063138d-af39-4950-adae-8736ff3172ef',
                    target: '#hubspot-form-container',
                    onFormReady: insertStyleSheet, // 表单加载完成后插入样式
                });
            }
        };

        // 确保脚本加载完成后再初始化表单
        if ((window as any)?.hbspt) {
            loadHubSpotForm();
        } else {
            const interval = setInterval(() => {
                if ((window as any)?.hbspt) {
                    clearInterval(interval);
                    loadHubSpotForm();
                }
            }, 100); // 每 100 毫秒检查一次
        }
    }, [insertStyleSheet]);

    return (
        <>
            {/!* 加载 HubSpot 脚本 *!/}
            <Script
                src="//js.hsforms.net/forms/embed/v2.js"
                strategy="afterInteractive"
            />
            {/!* 表单容器 *!/}
            <div id="hubspot-form-container" className={styles.formContainer} />
        </>
    );
};

export default HubSpotForm;*/

import React, { useEffect, useCallback, useState } from 'react'
import styles from './HubSpotForm.module.scss'
import { Typography, Box } from '@mui/material'
import { useDevice } from '../../../utils/deviceContext'

const HubSpotForm: React.FC<{
  quotation?: boolean
}> = (props) => {
  const [loading, setLoading] = useState(true) // 控制加载状态
  const { isMobile } = useDevice()

  // 用于在 iframe 中插入样式
  const insertStyleSheet = useCallback(() => {
    const iframe = document.querySelector(
      '#hubspot-form-container iframe'
    ) as HTMLIFrameElement | null
    const iframeDoc = iframe?.contentDocument

    if (iframeDoc) {
      // console.log('size-------',iframeDoc)
      const style = iframeDoc.createElement('style')
      style.innerHTML = `
        :root {
          /* 动态调整根字体大小，基于屏幕宽度 */
          font-size: calc(8px + 1vw); !important /* 默认字体适配 */
        }
        label {
          height: auto;
        }
        span, input, textarea, select {
          line-height: 1.5 !important;
        }
        input, textarea, select {
          font-size: 1.3rem !important;
        }
        span {
          font-size: 1.2rem !important;
        }
        // legend {
        //   font-size: 0.8rem !important;
        // }
        select {
          padding: 0 10px !important;
        }
        input, textarea, select {
          background-color: #F1F1F1 !important;
          border-color:#0E3775 !important;
        }
        input[type="submit"] {
          background-color: #0E3775 !important;
          font-weight: 500 !important;
        }
        li label.hs-error-msg {
          color:#0E3775 !important;
        }
        input.hs-input{
          color:#0E3775 !important;
        }
        select.hs-input {
          color:#0E3775 !important;
        }
        span.hs-form-required {
          color:#999999 !important;
        }
      `
      iframeDoc.head.appendChild(style)
    }
  }, [])

  useEffect(() => {
    const loadHubSpotForm = () => {
      if (typeof window !== 'undefined' && (window as any)?.hbspt) {
        ;(window as any).hbspt.forms.create({
          portalId: '47318811',
          formId: !props.quotation
            ? '6063138d-af39-4950-adae-8736ff3172ef'
            : 'f5c799be-8098-4388-b7ab-136dd2acd2dc',
          target: '#hubspot-form-container',
          onFormReady: () => {
            insertStyleSheet()
            setLoading(false) // 表单加载完成，隐藏占位符
            setQuotationData()
          },
          onFormSubmit: () => {
            sessionStorage.removeItem('quotation')
          },
        })
      }
    }

    // 动态加载 HubSpot 脚本
    if ((window as any)?.hbspt) {
      loadHubSpotForm()
    } else {
      const script = document.createElement('script')
      script.src = '//js.hsforms.net/forms/embed/v2.js'
      script.async = true
      script.onload = () => loadHubSpotForm()
      document.body.appendChild(script)
    }
  }, [insertStyleSheet, props.quotation])

  const setQuotationData = () => {
    const iframe = document.querySelector(
      '#hubspot-form-container iframe'
    ) as HTMLIFrameElement | null
    const iframeDoc = iframe?.contentDocument
    if (iframeDoc) {
      const quotation = sessionStorage.getItem('quotation')
      if (quotation !== null) {
        const { qcategory, qmaterial, qsilhouette, qsize, qquantity, qtotal } =
          JSON.parse(quotation)
        ;(iframeDoc.querySelector('input[name="category"]') as any).value = qcategory
        ;(iframeDoc.querySelector('input[name="material"]') as any).value = qmaterial
        ;(iframeDoc.querySelector('input[name="silhouette"]') as any).value = qsilhouette
        ;(iframeDoc.querySelector('input[name="size"]') as any).value = qsize
        ;(iframeDoc.querySelector('input[name="quantity"]') as any).value = qquantity
        ;(iframeDoc.querySelector('input[name="total"]') as any).value = qtotal
      }
    }
  }

  return (
    <Box>
      <div className={styles.formWrapper}>
        <Typography
          mb={'4.5rem'}
          fontWeight={'bold'}
          fontSize={`${isMobile ? '10rem' : '9.6rem'}`}
          fontFamily={'HC'}
          color={'var(--base-blue)'}
          textAlign={'center'}
        >
          CONTACT US
        </Typography>
        {/* 显示加载占位符 */}
        {loading && <div className={styles.loadingPlaceholder}>Form loading...</div>}

        {/* 表单容器 */}
        <div
          id="hubspot-form-container"
          style={{ display: loading ? 'none' : 'block' }}
          className={`${isMobile ? styles.formContainerMobile : styles.formContainer}`}
        />
      </div>
    </Box>
  )
}

export default HubSpotForm
