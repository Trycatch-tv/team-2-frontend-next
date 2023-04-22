import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import styles from './styles/ItemList.module.css'

export default function ItemList({
  array,
  deleteItem,
  updateItem,
  headerList,
  valuesList
}) {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            {headerList &&
              headerList.map((header, i) => <th key={i}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {array &&
            array.map(item => (
              <tr key={item.id}>
                <td>{item[`${valuesList[0]}`]}</td>
                <td>{item[`${valuesList[1]}`]}</td>
                {item[`${valuesList[2]}`] ? (
                  <td>{item[`${valuesList[2]}`]}</td>
                ) : null}
                {item[`${valuesList[3]}`] ? (
                  <td>{item[`${valuesList[3]}`]}</td>
                ) : null}

                <td>
                  <button onClick={() => updateItem(item)}>
                    <PencilSquareIcon />
                  </button>
                </td>
                <td>
                  <button onClick={() => deleteItem(item.id)}>
                    <TrashIcon />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
