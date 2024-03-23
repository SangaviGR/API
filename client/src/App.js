// import React, { useEffect, useState } from 'react';
// import { Card, CardContent, Typography, TextField, Button, Grid } from '@mui/material';

// const App = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [container, setContainer] = useState([]);

//   useEffect(() => {
//     if (searchTerm) {
//       fetchMe();
//     }
//   }, [searchTerm]);

//   const fetchMe = async () => {
//     const url = `https://online-movie-database.p.rapidapi.com/auto-complete?q=+${searchTerm}`;
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': 'cd18f869b4mshbbaefaa5af025a7p11ee6bjsn77e0fdf77670',
//         'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
//       }
//     };

//     try {
//       const response = await fetch(url, options);
//       const result = await response.json();
//       if (Array.isArray(result.d)) {
//         setContainer(result.d);
//       } else {
//         console.error('Result is not an array');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault(); // Prevent form submission
//     // fetchMe();
//   };

//   return (
//     <div>
//       <form onSubmit={handleSearch}>
//         <TextField
//           type="text"
//           id="search"
//           label="Search for movies"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <Button type="submit" variant="contained">Search</Button>
//       </form>

//       <Grid container spacing={2}>
//         {container.map((item, index) => (
//           <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//             <Card>
//               <img src={item.i.imageUrl} alt={item.l} style={{ width: '100%', height: 'auto' }} />
//               <CardContent>
//                 <Typography variant="h6" component="div">{item.l}</Typography>
//                 <Typography variant="h6" component="div">{item.s}</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };

// export default App;









// import React, { useEffect, useState } from 'react';
// import { TextField, Button, Grid, CircularProgress, Typography } from '@mui/material';

// const App = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [container, setContainer] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [successMsg, setSuccessMsg] = useState('');

//   useEffect(() => {
//     if (searchTerm) {
//       fetchMe();
//     }
//   }, [searchTerm]);

//   const fetchMe = async () => {
//     setLoading(true); // Set loading state to true
//     const url = 'https://spotify-web-api3.p.rapidapi.com/v1/social/spotify/searchall';
//     const options = {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//         'X-RapidAPI-Key': 'cd18f869b4mshbbaefaa5af025a7p11ee6bjsn77e0fdf77670',
//         'X-RapidAPI-Host': 'spotify-web-api3.p.rapidapi.com'
//       },
//       body: JSON.stringify({
//         terms: searchTerm,
//         limit: 1
//       })
//     };

//     try {
//       const response = await fetch(url, options);
//       const result = await response.json();
//       console.log(result);
//       if (result.data) {
//         setContainer([result.data]);
//         setSuccessMsg('Search successful!');
//       } else {
//         console.error('Result is not as expected');
//       }
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false); // Set loading state to false
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     // fetchMe();
//   };

//   return (
//     <div>
//       <form onSubmit={handleSearch}>
//         <TextField
//           type="text"
//           id="search"
//           label="Search for movies"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <Button type="submit" variant="contained">Search</Button>
//       </form>

//       {loading ? (
//         <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
//           <CircularProgress />
//         </div>
//       ) : (
//         <div>
//           {successMsg && <Typography variant="h6">{successMsg}</Typography>}
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;












import React, { useEffect, useState } from 'react';
import { TextField, Button, CircularProgress, Typography } from '@mui/material';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const fetchMe = async () => {
    setLoading(true);
    const url = 'https://air-cargo-co2-track-and-trace.p.rapidapi.com/track/subscribe';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'cd18f869b4mshbbaefaa5af025a7p11ee6bjsn77e0fdf77670',
        'X-RapidAPI-Host': 'air-cargo-co2-track-and-trace.p.rapidapi.com'
      },
      body: JSON.stringify({
        url: searchTerm,
        awb: '000-99999970',
        emails: []
      })
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      if (response.status === 200 && result.message === "successfully subscribed") {
        setSuccessMsg('Successfully subscribed');
      } else {
        console.error('Subscription failed');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMe();
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <TextField
          type="text"
          id="search"
          label="Enter URL"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button type="submit" variant="contained">Subscribe</Button>
      </form>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <CircularProgress />
        </div>
      ) : (
        <div>
          {successMsg && <Typography variant="h6">{successMsg}</Typography>}
        </div>
      )}
    </div>
  );
};

export default App;


// npm install @mui/material @emotion/react @emotion/styled @mui/icons-material axios cors react-router-dom