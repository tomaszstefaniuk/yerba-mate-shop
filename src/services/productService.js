const ITEMS_PER_PAGE = process.env.REACT_APP_PRODUCTS_PER_PAGE;

function getProducts({ type='', itemsPerPage=ITEMS_PER_PAGE, page=0, search='?' }={}) {
  const typeQuery = type ? `type=${type}&` : '';
  const pageQuery = page ? `page=${page}&` : '';
  const itemsPerPageQuery = itemsPerPage ? `itemsPerPage=${itemsPerPage}` : '';
  return fetch(
    `${process.env.REACT_APP_API_URL}product${(search && search + '&') || '?'}${typeQuery}${pageQuery}${itemsPerPageQuery}`,
    { mode: 'cors' }
  );
}

function getManyProducts(itemIDs) {
  const itemsStr = itemIDs
  .map(item => `items[]=${item}&`)
  .join('')
  .slice(0, -1);

  return fetch(
    `${process.env.REACT_APP_API_URL}product/many?${itemsStr}`,
    { mode: 'cors' }
  ).then(res => res.json());
}

function getPagination(type=false, itemsPerPage=ITEMS_PER_PAGE, search='?') {
  const typeQuery = type ? `type=${type}&` : '';
  const itemsPerPageQuery = itemsPerPage ? `itemsPerPage=${itemsPerPage}` : '';

  return fetch(
    `${process.env.REACT_APP_API_URL}product/pagination${(search && search + '&') || '?'}${typeQuery}${itemsPerPageQuery}`,
    { mode: 'cors' }
  );
}

// TO-DO:
/*
jeżeli query jest obecne to wygląda tak "?q={value}"
{ var: '1', var2: '3' } ==> `?var1=1&var2=3`
*/

export default {
  getProducts,
  getManyProducts,
  getPagination
};
