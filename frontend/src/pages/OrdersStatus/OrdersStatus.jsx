// Icons
import { MdArrowForwardIos } from "react-icons/md";
import { FaTruck } from "react-icons/fa6";

// React Router
import { Link } from "react-router-dom";

// components
import { CartProductBox } from "../../configs/Layout/Layout";

export default function OrdersStatus() {
  return (
    <div>
      <div>
        <div>
          <div className="border-b border-solid border-gray-400/50 py-4">
            <div className="flex items-center gap-2 font-danaBold text-zinc-700">
              <Link to={-1} className="flex items-center">
                <MdArrowForwardIos size="0.8rem" />
              </Link>
              <h2>جزئیات سفارش</h2>
            </div>
          </div>
          <div className="border-b border-solid border-gray-400/20 py-4">
            <div className="px-4 lg:px-8 flex gap-2 lg:gap-0 lg:items-center lg:flex-row flex-col font-dana overflow-auto active-orders-page-wrapper child:flex-shrink-0 child:flex-grow-0">
              <div className="flex flex-nowrap gap-1 lg:justify-start justify-between w-full lg:w-max ">
                <span className="text-sm text-gray-400 w-max">کد سفارش:</span>
                <span className="font-danaDemi text-sm text-zinc-700 w-max">
                  {/* {orderCode} */}
                  754489789489489
                </span>
              </div>
              <span className="size-2 rounded-full bg-gray-400/50 mx-2 lg:mx-4 hidden lg:inline"></span>
              <div className="lg:w-max w-full flex flex-nowrap gap-1 font-dana lg:justify-start justify-between">
                <span className="text-sm text-gray-400 w-max">
                  تاریخ سفارش:
                </span>
                <span className="font-danaDemi text-sm text-zinc-700 w-max">
                  {/* {`${date?.slice(0, date?.indexOf(`T`))}`} */}
                  4/8/2021
                </span>
              </div>
            </div>
          </div>
          <div className="border-b border-solid border-gray-400/20 py-4">
            <div className="px-4 lg:px-8 flex gap-2 lg:gap-0 lg:flex-row flex-col lg:items-center font-dana overflow-auto active-orders-page-wrapper child:flex-shrink-0 child:flex-grow-0">
              <div className="w-full lg:w-max flex lg:justify-start justify-between flex-nowrap gap-1">
                <span className="text-sm text-gray-400 w-max">
                  تحویل گیرنده:{" "}
                </span>
                <span className="font-danaDemi text-sm text-zinc-700 w-max">
                  علی مرادی
                </span>
              </div>
              <span className="size-2 rounded-full bg-gray-400/50 mx-2 lg:mx-4 lg:inline hidden"></span>
              <div className="lg:w-max w-full lg:justify-start justify-between flex flex-nowrap gap-1 font-dana">
                <span className="text-sm text-gray-400 w-max">
                  شماره موبایل:{" "}
                </span>
                <span className="font-danaDemi text-sm text-zinc-700 w-max">
                  09658969856
                </span>
              </div>
            </div>
            <div className="px-4 lg:px-8 mt-2 lg:mt-4 flex lg:items-center lg:flex-row flex-col gap-2">
              <span className="text-sm text-gray-400 w-max font-dana">
                آدرس:{" "}
              </span>
              <span className="font-danaDemi text-sm text-zinc-700 line-clamp-2 lg:line-clamp-1">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
              </span>
            </div>
          </div>
          <div className="border-b border-solid border-gray-400/20 py-4">
            <div className="px-4 lg:px-8 flex lg:flex-row flex-col gap-2 lg:gap-0 lg:items-center font-dana overflow-auto active-orders-page-wrapper child:flex-shrink-0 child:flex-grow-0">
              <div className="justify-between lg:justify-start w-full lg:w-max flex flex-nowrap gap-1">
                <span className="text-sm text-gray-400 w-max">مبلغ: </span>
                <span className="font-danaDemi text-sm text-zinc-700 w-max flex items-center">
                  {(897885898).toLocaleString()}
                  <span className="px-2">تومان</span>
                </span>
              </div>
              <span className="size-2 rounded-full bg-gray-400/50 mx-2 lg:mx-4 hidden lg:inline"></span>
              <div className="justify-between lg:justify-start w-full lg:w-max flex flex-nowrap gap-1 font-dana">
                <span className="text-sm text-gray-400 w-max">
                  سود شما از خرید:{" "}
                </span>
                <span className="font-danaDemi text-sm text-zinc-700 w-max flex items-center">
                  {(48885980990).toLocaleString()}
                  <span className="px-2">تومان</span>
                </span>
              </div>
              <span className="size-2 rounded-full bg-gray-400/50 mx-2 lg:mx-4 hidden lg:inline"></span>
              <div className="flex items-center gap-2 justify-between lg:justify-start lg:hidden">
                <span className="text-sm text-gray-400 w-max font-dana">
                  هزینه ارسال:{" "}
                </span>
                <span className="font-danaDemi text-sm text-zinc-700 w-max flex items-center">
                  {(984959595).toLocaleString()}
                  <span className="px-2">تومان</span>
                </span>
              </div>
              <div className="w-max flex flex-nowrap gap-1 font-dana">
                <span className="text-sm text-gray-400 w-max">
                  پرداخت اینترنتی
                </span>
              </div>
            </div>
            <div className="px-4 lg:px-8 mt-2 lg:mt-4 items-center gap-2 justify-between sm:justify-start hidden lg:flex">
              <span className="text-sm text-gray-400 w-max font-dana">
                هزینه ارسال:{" "}
              </span>
              <span className="font-dana lg:font-danaBold text-sm text-zinc-700 w-max flex items-center">
                {(984959595).toLocaleString()}
                <span className="px-2">تومان</span>
              </span>
            </div>
          </div>
          <div className="py-4">
            <div className="flex items-center justify-between w-full">
              <div className="w-full">
                <div className="w-full px-4 lg:px-8 flex items-center font-dana overflow-auto active-orders-page-wrapper child:flex-shrink-0 child:flex-grow-0">
                  <div className="w-max flex flex-nowrap items-center gap-1 font-dana">
                    <span className="text-sm text-gray-400 w-max">
                      4 عدد مرسوله
                    </span>
                  </div>
                  <span className="size-1 rounded-full bg-gray-400/50 mx-2"></span>
                  <div className="w-max flex flex-nowrap items-center gap-1 font-dana">
                    <span className="text-orange-400">
                      <FaTruck />
                    </span>
                    <span className="text-sm text-gray-400 w-max">
                      ارسال از طریق تیپاکس
                    </span>
                  </div>
                </div>
                <div className="w-full px-4 lg:px-8 flex items-center font-dana overflow-auto active-orders-page-wrapper lg:child:flex-shrink-0 lg:child:flex-grow-0 mt-4">
                  <div className="w-full lg:w-max lg:justify-start justify-between flex flex-nowrap gap-1">
                    <span className="text-sm text-gray-400 w-max">
                      زمان تحویل:{" "}
                    </span>
                    <span className="font-danaDemi text-sm text-zinc-700 w-max flex items-center">
                      5/8/2020
                    </span>
                  </div>
                </div>
              </div>
              <div className="sm:w-1/2 flex-col gap-2 font-dana mx-4 lg:mx-8 rounded-lg p-2 hidden lg:flex">
                <span className="font-dana text-sm sm:text-base text-teal-600">
                  تحویل مرسوله به مشتری
                </span>
                <div className="w-full h-1 bg-gray-400/30 rounded-lg">
                  <div
                    className="size-full bg-teal-600 rounded-lg"
                    style={{ width: `50%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="py-4">
              <div className="px-4 lg:px-8 flex gap-2 lg:gap-0 lg:flex-row flex-col lg:items-center font-dana overflow-auto active-orders-page-wrapper child:flex-shrink-0 child:flex-grow-0 justify-between">
                <div className="gap-2 lg:gap-0 lg:flex-row flex-col lg:items-center font-dana overflow-auto active-orders-page-wrapper child:flex-shrink-0 child:flex-grow-0 hidden lg:flex">
                  <div className="w-full lg:w-max flex lg:justify-start justify-between flex-nowrap gap-1">
                    <span className="text-sm text-gray-400 w-max">
                      تحویل گیرنده:{" "}
                    </span>
                    <span className="font-dana lg:font-danaBold text-sm text-zinc-700 w-max">
                      علی مرادی
                    </span>
                  </div>
                  <span className="size-2 rounded-full bg-gray-400/50 mx-2 lg:mx-4 lg:inline hidden"></span>
                  <div className="lg:w-max w-full lg:justify-start justify-between flex flex-nowrap gap-1 font-dana">
                    <span className="text-sm text-gray-400 w-max">
                      شماره موبایل:{" "}
                    </span>
                    <span className="font-dana lg:font-danaBold text-sm text-zinc-700 w-max">
                      09658969856
                    </span>
                  </div>
                </div>
                <div className="lg:w-max w-full lg:justify-start justify-between flex flex-nowrap gap-1 font-dana">
                  <span className="text-sm text-gray-400 w-max">
                    کد مرسوله:{" "}
                  </span>
                  <span className="font-danaDemi text-sm text-zinc-700 w-max">
                    09658969856
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full flex-col gap-2 font-dana lg:mx-8 rounded-lg p-2 flex lg:hidden">
              <span className="font-dana text-sm sm:text-base text-teal-600">
                تحویل مرسوله به مشتری
              </span>
              <div className="w-full h-1 bg-gray-400/30 rounded-lg">
                <div
                  className="size-full bg-teal-600 rounded-lg"
                  style={{ width: `50%` }}
                ></div>
              </div>
            </div>
            <div className="border border-solid border-gray-400/50 py-2 px-4 rounded-lg mt-4 child:py-4 divide-y divide-solid divide-gray-400/50">
              <CartProductBox
                refetch={"refetch"}
                productId={"el.product._id"}
                color={null}
                size={null}
                title={"el.product.title"}
                cover={"`${apiUrl}/${el.product.covers[0]}`"}
                warranty={"el.warranty"}
                productCount={8000000}
                price={8000000}
                discounted={8000000}
                href={`/product/`}
                notShowCounter={true}
              />
              <CartProductBox
                refetch={"refetch"}
                productId={"el.product._id"}
                color={null}
                size={null}
                title={"el.product.title"}
                cover={"`${apiUrl}/${el.product.covers[0]}`"}
                warranty={"el.warranty"}
                productCount={8000000}
                price={8000000}
                discounted={8000000}
                href={`/product/`}
                notShowCounter={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
