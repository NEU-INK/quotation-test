

import { Grid, Box, Button,TextField } from '@mui/material';
import React, { useState } from 'react';
// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
// import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
// import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
// import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
// import AttachFileIcon from '@mui/icons-material/AttachFile';
// import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { contactForm } from '../../../data/data';
import styles from './ContactForm.module.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#13357b', // 主色调
    },
    secondary: {
      main: '#2c59b6', // 次色调
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            color: '#13357b',
            '& fieldset': {
              borderColor: '#13357b',
            },
            '&:hover fieldset': {
              borderColor: '#13357b',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#13357b',
            },
          },
          '& .MuiInputBase-root': {
            color: '#13357b', // 自定义输入框文字颜色
            fontSize: '2.6rem',
          },
          '& .MuiFormLabel-root': {
            color: '#13357b', // 自定义标签文字颜色
            fontSize: '2.6rem',
          },
          '& .MuiInputBase-root.Mui-focused': {
            color: '#13357b', // 聚焦时的输入框文字颜色
            fontSize: '2.6rem',
          },
          '& .MuiFormLabel-root.Mui-focused': {
            color: '#13357b', // 聚焦时的标签文字颜色
            fontSize: '2.6rem',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#13357b',
          color: '#fff',
          fontSize:'3.6rem',
          '&:hover': {
            backgroundColor: '#2c59b6',
          },
        },
      },
    },
  },
});



const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    number: '',
    company: '',
    googleDrive:'',
    message: '',
  });

  const formSuccess = () => toast.success(contactForm.success);
  const formError = () => toast.error(contactForm.error);
  // 获取浏览器和设备信息
  const getBrowserInfo = () => {
    const userAgent = navigator.userAgent;
    let browserName = "Unknown";
    let platform = "Unknown";

    if (userAgent.indexOf("Firefox") > -1) {
      browserName = "Mozilla Firefox";
    } else if (userAgent.indexOf("Edge") > -1) {
      browserName = "Edge";
    } else if (userAgent.indexOf("Chrome") > -1) {
      browserName = "Google Chrome";
    } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
      browserName = "Opera";
    } else if (userAgent.indexOf("Trident") > -1) {
      browserName = "Microsoft Internet Explorer";
    } else if (userAgent.indexOf("Safari") > -1) {
      browserName = "Safari";
    }

    if (navigator.appVersion.indexOf("Win") !== -1) platform = "Windows";
    if (navigator.appVersion.indexOf("Mac") !== -1) platform = "MacOS";
    if (navigator.appVersion.indexOf("X11") !== -1) platform = "UNIX";
    if (navigator.appVersion.indexOf("Linux") !== -1) platform = "Linux";

    return {
      browserName,
      platform,
    };
  };
  // 通过ip获取位置信息
  const getLocation = async () => {
    try {
      const response = await fetch('https://ipinfo.io/json');
      if (!response.ok) {
        return {
          city: null,
          region: null,
          country: null,
          hostname:  null,
          ip: null,

        };
      }
      const data = await response.json();
      // const [latitude, longitude] = data.loc ? data.loc.split(',').map(Number) : [null, null];
      return {
        city: data.city || null,
        region: data.region || null,
        country: data.country || null,
        hostname: data.hostname || null,
        ip: data.ip || null,
      };
    } catch {
      return {
        city: null,
        region: null,
        country: null,
        hostname:  null,
        ip: null,


      };
    }
  };


  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const browserInfo = getBrowserInfo();
    const location = await getLocation();

    const formData = {
      ...form,
      ...browserInfo,
      ...location,
    };
    console.log('f---',formData)

    const res = await fetch('/api/contact', {
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();
    if (error) {
      formError();
    } else {
      formSuccess();
      setForm({ name: '', email: '', number: '', company: '',googleDrive:'', message: '' });
    }
  };

  return (
      <>

        <ThemeProvider theme={theme} >
          <ToastContainer  autoClose={5000} position="top-center" />
          <form className={styles.contactForm} onSubmit={handleForm}>
            <Grid container rowSpacing={3}  columnSpacing={{ xs: 1, sm: 2, md: 3 }} direction={{ xs: 'column', md: 'row' }} >
              <Grid item  xs={12} md={12} className={styles.inputFieldContainer}>
                <TextField
                    className={styles.inputField}
                    label="Company name"
                    variant="outlined"
                    defaultValue={form.company}
                    required
                    name="company"

                    onChange={(e) => setForm({ ...form, company: e.target.value })}

                />
              </Grid>
              <Grid item  xs={5} className={styles.inputFieldContainer}>
                <TextField
                    className={styles.inputField}
                    required
                    id="filled-required"
                    label="Full Name"
                    name="name"
                    type="text"
                    defaultValue={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </Grid>
              <Grid item  xs={7} className={styles.inputFieldContainer}>
                <TextField
                    className={styles.inputField}
                    required
                    id="filled-required"
                    label="Phone Number"
                    defaultValue={form.number}
                    onChange={(e) => setForm({ ...form, number: e.target.value })}

                />
                {/*pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"*/}
              </Grid>
              <Grid item  xs={5} className={styles.inputFieldContainer}>
                <TextField
                    className={styles.inputField}
                    required
                    id="filled-required"
                    label="Email Address"
                    name="email"
                    type="email"
                    defaultValue={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}

                />
                {/*pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"*/}
              </Grid>
              <Grid item  xs={7} className={styles.inputFieldContainer}>
                <TextField
                    className={styles.inputField}

                    label="Google Drive link"
                    defaultValue={form.googleDrive}
                    onChange={(e) => setForm({ ...form, googleDrive: e.target.value })}

                />
                {/*pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"*/}
            </Grid>

 <Grid item  xs={12} md={12}  className={styles.inputFieldContainer}>
                <TextField
                    className={styles.inputField}
                    name="message"
                    label="Message"
                    defaultValue={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    multiline
                    rows={8}/>
              </Grid>


            </Grid>
            <Box className={styles.submitButton}>
              <Box>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={styles.contactUsButton}>
                  Submit
                </Button>
              </Box>
            </Box>
          </form>
        </ThemeProvider>
         </>
  );
};

export default ContactForm;






