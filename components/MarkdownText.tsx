/*
import * as React from 'react'
import Markdown from 'markdown-to-jsx'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h1' },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h2' },
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h3' },
    },
    h4: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h4' },
    },
    h5: {
      component: Typography,
      props: { marginTop: '10px', gutterBottom: true, variant: 'h5' },
    },
    h6: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h6' },
    },
    img: {
      component: (props: { src: string; alt: string; className: string }) => {
        const tokens = props.src.split('#')
        let className = 'image'
        if (tokens.length > 1) {
          className = tokens[1]
        }
        return (
          <span className="center-align">
            <img {...props} className={className} alt="image" />
          </span>
        )
      },
    },
    p: {
      component: Typography,
      props: { paragraph: true },
    },
    a: { component: Link },
    li: {
      component: (props: { name: string }) => (
        <Box component="li" sx={{ mt: 1 }}>
          <Typography component="span" {...props} />
        </Box>
      ),
    },
  },
}

export default function MarkdownText(props: { children: string }) {
  return <Markdown options={options} {...props} />
}

*/
import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

interface MarkdownTextProps {
  children: string;
  isMobile?: boolean;
}

const MarkdownText: React.FC<MarkdownTextProps> = ({ children, isMobile = false }) => {
  const options = {
    overrides: {
      h1: {
        component: Typography,
        props: { gutterBottom: true, variant: 'h1' },
      },
      h2: {
        component: Typography,
        props: { gutterBottom: true, variant: 'h2' },
      },
      h3: {
        component: Typography,
        props: { gutterBottom: true, variant: 'h3' },
      },
      h4: {
        component: Typography,
        props: { gutterBottom: true, variant: 'h4' },
      },
      h5: {
        component: Typography,
        props: {
          marginTop: '10px',
          gutterBottom: true,
          variant: 'h5',
          fontSize: `${isMobile ? '3rem' : '3.6rem'}`,  // 字体大小
          fontWeight: 'bold',  // 加粗
        },
      },
      h6: {
        component: Typography,
        props: { gutterBottom: true, variant: 'h6' },
      },
      img: {
        component: (props: { src: string; alt?: string }) => {
          const tokens = props.src.split('#');
          const className = tokens.length > 1 ? tokens[1] : 'image';

          return (
              <img
                  {...props}
                  className={className}
                  alt={props.alt || 'image'}
                  onError={(e) => {
                    e.currentTarget.src = '/path/to/default/image.png'; // 默认图片路径
                  }}
              />
          );
        },
      },
      p: {
        component: Typography,
        props: {
          paragraph: true,
          fontSize: `${isMobile ? '2rem' : '2.6rem'}`, // 普通文本字体大小
        },
      },
      a: {
        component: Link,
        props: { target: '_blank', rel: 'noopener noreferrer' }, // 外部链接安全性
      },
      li: {
        component: (props: React.HTMLAttributes<HTMLSpanElement>) => (
            <Box component="li" sx={{ mt: 1 }}>

              <Typography component="span" {...props} />
            </Box>
        ),
      },
    },
  };

  return <Markdown options={options}>{children}</Markdown>;
};

export default MarkdownText;
