import React, {useState} from 'react'

function Table(props) {
    const [resultLimit , setResultLimit] = useState(20);
    const handleResultLimit = (e) => {
        setResultLimit(e.target.value)
    }
    if(props.data.length === 0){
        return (
            <div>
                No Result Found!
            </div>
        )
    }
  return (
        <div className="flex flex-col mb-10 w-5/6 sm:max-w-2/6">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className='my-5 bg-gray-100 rounded-md w-40 p-2'>
                <label for="result">Result limit:</label>
                <select value={resultLimit} name="result" className='bg-gray-100 ml-4' onChange={(e)=>handleResultLimit(e)}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option defaultValue value={20}>20</option>
                </select>
            </div>
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Body
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {props.data.slice(0,resultLimit).map(item => (
                      <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{item.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{item.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{item.body.substring(0, 64)}...</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Table