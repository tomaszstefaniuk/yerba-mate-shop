import React, { Fragment } from 'react';
import Paging from 'components/Paging';
import productService from 'services/productService';

function withPagination(Component, request) {
  return class ComponentWithPagination extends React.Component {
    state = {
      data: {},
      page: 0,
      nOfPages: 0,
      total: 0,
      itemsPerPage: process.env.REACT_APP_PRODUCTS_PER_PAGE
    };

    componentWillReceiveProps(nextProps) {
      productService.getPagination(
        this.props.type,
        this.state.itemsPerPage,
        nextProps.location.search
      )
      .then(res => {
        res.json()
        .then(({ nOfPages, total, itemsPerPage }) => {
          this.changePage(
            this.props.type,
            this.state.itemsPerPage,
            this.state.page,
            nextProps.location.search
          );
          this.setState({
            nOfPages,
            total,
            itemsPerPage
          });
        });
      });
    }

    componentWillMount() {
      productService.getPagination(this.props.type, this.state.itemsPerPage, this.props.location.search)
      .then(res => {
        res.json()
        .then(({ nOfPages, total, itemsPerPage }) => {
          this.changePage(this.props.type, itemsPerPage, this.state.page);
          this.setState({
            nOfPages,
            total,
            itemsPerPage
          });
        });
      });
    }

    changePage = (type, itemsPerPage, page, query) => {
      const search = query || this.props.location.search;
      request({ type, itemsPerPage, page, search })
      .then(res => {
        res.json()
        .then(data => this.setState({ data, page }));
      });
    }

    render() {
      return (
        <Fragment>
          <Component {...this.props} data={this.state.data} />
          <Paging
            page={this.state.page}
            nOfPages={this.state.nOfPages}
            itemsPerPage={this.state.itemsPerPage}
            onPageChange={(page) => this.changePage(
              this.props.type, this.state.itemsPerPage, page
            )}
          />
        </Fragment>
      );
    }
  }
}

export default withPagination;
