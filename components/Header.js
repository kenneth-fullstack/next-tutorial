import headerStyle from "../styles/Header.module.css"

const Header = () => {
    return (
        <div>
            <h1 className={headerStyle.title}>
                <span>WebDev</span> News
            </h1>
            <p className={headerStyle.description}>Keep up to date with the latest web dev news</p>
            {/* <style jsx>
                {`
                    .title {
                        color: red;
                    }
                `}
            </style> */}
        </div>
    )
}

export default Header
