const convertDateIntoYear = (year) => new Date(year).getFullYear();

const fetchData = async (url) => {
    let controller = new AbortController();
    let signal = controller.signal;
  
    try {
      const response = await fetch(url, { signal });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      controller = null;
  
      return data;
    } catch (error) {
      console.error('There was an error fetching the data:', error);
    }
  }
  

export {convertDateIntoYear, fetchData};