import { SinglDashboardProduct } from './SinglDashboardProduct';

export const DashboardProducts = (props) => {

    return (
        <>
            <div className='flex'>
                {props.isCategoryType ?
                    <SinglDashboardProduct products={props.categories} isCategoryType={true}/>
                : null}
                {props.isFeaturedProducts ?
                    <SinglDashboardProduct products={props.featuredProducts} isProducts={true} />
                :null}
                {props.isProductDiscount ?
                    <SinglDashboardProduct products={props.productDiscount} isProducts={true} />
                :null}
                {props.isBlogType ?
                    <SinglDashboardProduct blogs={props.blogs} isBlogType={true} />
                :null}
                {props.isBrandType ?
                    <SinglDashboardProduct products={props.products} isBrandType={true} brand={props.brand} handleItem={props.handleItem} />
                :null}
                
            </div>
        </>
    )
}