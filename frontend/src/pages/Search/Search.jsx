// Mui
import * as React from "react";
import { useEffect, useState } from "react";

// components
import { ProductBox } from "../../configs/Layout/Layout";

// Icons
import { GoFilter } from "react-icons/go";

// React Router
import { Link, useParams } from "react-router-dom";

// React Query
import { useQuery } from "react-query";

// Axios
import {
  apiUrl,
  getBrands,
  getCategories,
  getSearchResult,
} from "../../configs/axios/axiosConfigs";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Search() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const param = useParams();

  const [searchUrlSort, setSearchUrlSort] = useState(`popular`);

  const { data, isLoading, refetch } = useQuery(
    `search/${param.searchValue}${searchUrlSort}`,
    async () => {
      const result = await getSearchResult({
        url: `&keyword=${param.searchValue}&sort=${searchUrlSort}`,
      });

      return result.data;
    },
    {
      staleTime: 30000,
    },
  );

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res.data);
    });
    getBrands().then((res) => {
      setBrands(res.data);
    });

    setSearchUrlSort(`popular`);

    document.documentElement.scrollTop = 0;
    document.title = "پریمو - جستجو";
  }, []);

  useEffect(() => {
    refetch();
  }, [searchUrlSort]);

  return (
    <div className="py-5">
      <div className="container">
        <div className="grid grid-cols-4 gap-3">
          <div className="hidden lg:block lg:col-span-1">
            <div className="flex flex-col gap-6">
              <div className="font-dana bg-white rounded-lg py-2 px-4">
                <h3 className="text-zinc-700 mb-4 text-base lg:text-lg">
                  دسته بندی محصولات
                </h3>
                <ul className="text-sm text-gray-400 flex flex-col gap-1.5 child:cursor-pointer list-disc child:mr-6">
                  {!!categories.length &&
                    categories.map((el) => (
                      <li
                        key={Math.random()}
                        className="transition-all hover:text-orange-400 relative before:content-[''] before:absolute before:w-0 hover:before:w-3 before:transition-all hover:pr-5 before:h-[0.18rem] before:rounded-lg before:bg-orange-400 before:top-0 before:right-0 before:bottom-0 before:my-auto"
                      >
                        <Link
                          className="flex items-center justify-between font-dana"
                          to={`/search/${el.title}`}
                        >
                          {el.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="font-dana bg-white rounded-lg py-2 px-4">
                <h3 className="text-zinc-700 mb-4 text-base lg:text-lg">
                  دسته بندی برند ها
                </h3>
                <ul className="text-sm text-gray-400 flex flex-col gap-1.5 child:cursor-pointer list-disc child:mr-6">
                  {!!brands.length &&
                    brands.map((el) => (
                      <li
                        key={Math.random()}
                        className="transition-all hover:text-orange-400 relative before:content-[''] before:absolute before:w-0 hover:before:w-3 before:transition-all hover:pr-5 before:h-[0.18rem] before:rounded-lg before:bg-orange-400 before:top-0 before:right-0 before:bottom-0 before:my-auto"
                      >
                        <Link
                          className="flex items-center justify-between font-dana"
                          to={`/search/${el.title}`}
                        >
                          {el.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-4 lg:col-span-3">
            <nav className="flex items-center gap-5 sm:pb-4">
              <div className="text-zinc-700 hidden sm:block">
                <GoFilter size="1.6rem" />
              </div>
              <div className="sm:hidden">
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <div className="text-zinc-700 font-danaBold flex items-center gap-1">
                    <GoFilter size="1.6rem" />
                    دسته بندی ها
                  </div>
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem
                    onClick={() => {
                      setSearchUrlSort(`popular`);
                      handleClose();
                    }}
                  >
                    پیشفرض
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSearchUrlSort(`off`);
                      handleClose();
                    }}
                  >
                    بیشترین تخفیف
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSearchUrlSort(`expensive`);
                      handleClose();
                    }}
                  >
                    گران ترین
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSearchUrlSort(`mostBuy`);
                      handleClose();
                    }}
                  >
                    بیشترین خریدار
                  </MenuItem>
                </Menu>
              </div>
              <ul className="hidden sm:flex flex-wrap items-center gap-2 child:sm:py-2 child:sm:px-4 child:py-1 child:px-2 child:rounded-lg child:bg-white font-dana text-xs  sm:text-sm text-zinc-700">
                <li>
                  <button
                    onClick={() => {
                      setSearchUrlSort(`popular`);
                    }}
                  >
                    پیشفرض
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setSearchUrlSort(`off`);
                    }}
                  >
                    بیشترین تخفیف
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setSearchUrlSort(`expensive`);
                    }}
                  >
                    گران ترین
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setSearchUrlSort(`mostBuy`);
                    }}
                  >
                    بیشترین خریدار
                  </button>
                </li>
              </ul>
            </nav>
            <div className="grid grid-cols-4 lg:grid-cols-3 gap-x-4 child:lg:col-span-1 child:col-span-4 child:sm:col-span-2">
              {!isLoading && data.length ? (
                data.map((el) => {
                  return (
                    <div key={Math.random()}>
                      <ProductBox
                        id={el?._id}
                        warranty={el?.warranty[0]?.warrantyItem}
                        colorId={el?.colors?.length ? el?.colors[0]?._id : []}
                        sizeId={el?.sizes?.length ? el?.sizes[0]?._id : []}
                        cover={`${apiUrl}/${el?.covers[0]}`}
                        title={el?.title}
                        href={`product/${el?.href}`}
                        discounted={
                          el?.off
                            ? el?.off
                            : el?.colors[0]
                              ? el?.colors[0]?.off
                              : el?.sizes[0].off
                                ? el?.sizes[0].off
                                : 0
                        }
                        price={
                          el?.mainPrice
                            ? el?.mainPrice
                            : el?.colors[0]
                              ? el?.colors[0]?.price
                              : el?.sizes[0].price
                                ? el?.sizes[0].price
                                : 0
                        }
                        num={el?.Availability}
                        averageScore={el?.productAverageScore}
                      />
                    </div>
                  );
                })
              ) : (
                <h2 className="font-dana text-xl text-center">
                  چیزی برای نمایش وجود ندارد
                </h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
