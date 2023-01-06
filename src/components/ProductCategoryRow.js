export default function ProductCategoryRow({ category }) {
    return (

        <tr>
            <th colSpan="2">
                <img
                    src="https://i.imgur.com/MK3eW3As.jpg"
                    alt="Katherine Johnson"
                />
                {category}
            </th>
        </tr>
    );
}