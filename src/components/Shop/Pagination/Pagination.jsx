import React, { useEffect } from "react";
import "./style.css";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getProducts,
  getProductsByCate,
  getProductsBySearch,
} from "./../../../actions/product";

Pagi.propTypes = {};

function Pagi({ page, cateQuery, searchQuery }) {
  const dispatch = useDispatch();
  const { numberOfPages, currentPage } = useSelector((state) => state.products);
  useEffect(() => {
    if (cateQuery && page) {
      dispatch(
        getProductsByCate({
          category: cateQuery,
          page: page,
        })
      );
      // history.push(`/shop/cate?category=${cate||'none'}`)
    } else {
      if (page) {
        dispatch(getProducts(page));
      }
    }
  }, [page, cateQuery, dispatch]);
  return (
    <Pagination
      count={numberOfPages}
      variant="outlined"
      color="primary"
      page={Number(page) || 1}
      className="pagi"
      renderItem={(item) => {
        return (
          <PaginationItem
            {...item}
            component={Link}
            to={
              cateQuery != null
                ? `/shop/cate?category=${cateQuery}&page=${item.page}`
                : `/shop?page=${item.page}`
            }
          />
        );
      }}
    />
  );
}

export default Pagi;
