export default function UserTable() {
  const products = [
    {
      name: "Jane Smith",
      email: "jane_smith@example.com",
      balance: 5678,
      active: false,
      register_at: "2023-05-12T00:00:00",
    },
    {
      name: "Bob Johnson",
      email: "bob_johnson@example.com",
      balance: 4321,
      active: false,
      register_at: "2023-07-23T00:00:00",
    },
    {
      name: "Alice Williams",
      email: "alice_williams@example.com",
      balance: 7890,
      active: false,
      register_at: "2023-02-15T00:00:00",
    },
    {
      name: "David Jones",
      email: "david_jones@example.com",
      balance: 2345,
      active: false,
      register_at: "2023-11-30T00:00:00",
    },
    {
      name: "Eve Brown",
      email: "eve_brown@example.com",
      balance: 6789,
      active: false,
      register_at: "2023-09-05T00:00:00",
    },
    {
      name: "Frank Davis",
      email: "frank_davis@example.com",
      balance: 1234,
      active: false,
      register_at: "2023-04-20T00:00:00",
    },
    {
      name: "Grace Miller",
      email: "grace_miller@example.com",
      balance: 9876,
      active: false,
      register_at: "2023-08-14T00:00:00",
    },
    {
      name: "Hannah Wilson",
      email: "hannah_wilson@example.com",
      balance: 5432,
      active: false,
      register_at: "2023-06-25T00:00:00",
    },
    {
      name: "Charlie Moore",
      email: "charlie_moore@example.com",
      balance: 8765,
      active: false,
      register_at: "2023-03-10T00:00:00",
    },
    {
      name: "John Taylor",
      email: "john_taylor@example.com",
      balance: 3456,
      active: false,
      register_at: "2023-10-18T00:00:00",
    },
    {
      name: "Jane Johnson",
      email: "jane_johnson@example.com",
      balance: 6543,
      active: false,
      register_at: "2023-01-22T00:00:00",
    },
    {
      name: "Bob Williams",
      email: "bob_williams@example.com",
      balance: 7890,
      active: false,
      register_at: "2023-12-05T00:00:00",
    },
    {
      name: "Alice Jones",
      email: "alice_jones@example.com",
      balance: 2345,
      active: false,
      register_at: "2023-07-15T00:00:00",
    },
    {
      name: "David Brown",
      email: "david_brown@example.com",
      balance: 6789,
      active: false,
      register_at: "2023-09-25T00:00:00",
    },
    {
      name: "Eve Davis",
      email: "eve_davis@example.com",
      balance: 1234,
      active: false,
      register_at: "2023-04-10T00:00:00",
    },
    {
      name: "Frank Miller",
      email: "frank_miller@example.com",
      balance: 9876,
      active: false,
      register_at: "2023-08-20T00:00:00",
    },
    {
      name: "Grace Wilson",
      email: "grace_wilson@example.com",
      balance: 5432,
      active: false,
      register_at: "2023-06-30T00:00:00",
    },
    {
      name: "Hannah Moore",
      email: "hannah_moore@example.com",
      balance: 8765,
      active: false,
      register_at: "2023-03-15T00:00:00",
    },
    {
      name: "Charlie Taylor",
      email: "charlie_taylor@example.com",
      balance: 3456,
      active: false,
      register_at: "2023-10-25T00:00:00",
    },
    {
      name: "John Smith",
      email: "john_smith@example.com",
      balance: 6543,
      active: false,
      register_at: "2023-01-30T00:00:00",
    },
    {
      name: "Jane Williams",
      email: "jane_williams@example.com",
      balance: 7890,
      active: false,
      register_at: "2023-12-10T00:00:00",
    },
    {
      name: "Bob Jones",
      email: "bob_jones@example.com",
      balance: 2345,
      active: false,
      register_at: "2023-07-20T00:00:00",
    },
    {
      name: "Alice Brown",
      email: "alice_brown@example.com",
      balance: 6789,
      active: false,
      register_at: "2023-09-30T00:00:00",
    },
    {
      name: "David Davis",
      email: "david_davis@example.com",
      balance: 1234,
      active: false,
      register_at: "2023-04-15T00:00:00",
    },
    {
      name: "Eve Miller",
      email: "eve_miller@example.com",
      balance: 9876,
      active: false,
      register_at: "2023-08-25T00:00:00",
    },
    {
      name: "Frank Wilson",
      email: "frank_wilson@example.com",
      balance: 5432,
      active: false,
      register_at: "2023-06-05T00:00:00",
    },
    {
      name: "Grace Moore",
      email: "grace_moore@example.com",
      balance: 8765,
      active: false,
      register_at: "2023-03-20T00:00:00",
    },
    {
      name: "Hannah Taylor",
      email: "hannah_taylor@example.com",
      balance: 3456,
      active: false,
      register_at: "2023-10-30T00:00:00",
    },
    {
      name: "Charlie Smith",
      email: "charlie_smith@example.com",
      balance: 6543,
      active: false,
      register_at: "2023-01-05T00:00:00",
    },
    {
      name: "John Johnson",
      email: "john_johnson@example.com",
      balance: 7890,
      active: false,
      register_at: "2023-12-15T00:00:00",
    },
    {
      name: "Jane Jones",
      email: "jane_jones@example.com",
      balance: 2345,
      active: false,
      register_at: "2023-07-25T00:00:00",
    },
    {
      name: "Bob Brown",
      email: "bob_brown@example.com",
      balance: 6789,
      active: false,
      register_at: "2023-09-10T00:00:00",
    },
    {
      name: "Alice Davis",
      email: "alice_davis@example.com",
      balance: 1234,
      active: false,
      register_at: "2023-04-25T00:00:00",
    },
    {
      name: "David Miller",
      email: "david_miller@example.com",
      balance: 9876,
      active: false,
      register_at: "2023-08-30T00:00:00",
    },
    {
      name: "Eve Wilson",
      email: "eve_wilson@example.com",
      balance: 5432,
      active: false,
      register_at: "2023-06-10T00:00:00",
    },
    {
      name: "Frank Moore",
      email: "frank_moore@example.com",
      balance: 8765,
      active: false,
      register_at: "2023-03-25T00:00:00",
    },
    {
      name: "Grace Taylor",
      email: "grace_taylor@example.com",
      balance: 3456,
      active: false,
      register_at: "2023-11-05T00:00:00",
    },
    {
      name: "Hannah Smith",
      email: "hannah_smith@example.com",
      balance: 6543,
      active: false,
      register_at: "2023-01-10T00:00:00",
    },
    {
      name: "Charlie Johnson",
      email: "charlie_johnson@example.com",
      balance: 7890,
      active: false,
      register_at: "2023-12-20T00:00:00",
    },
    {
      name: "John Williams",
      email: "john_williams@example.com",
      balance: 2345,
      active: false,
      register_at: "2023-07-30T00:00:00",
    },
    {
      name: "Jane Brown",
      email: "jane_brown@example.com",
      balance: 6789,
      active: false,
      register_at: "2023-09-15T00:00:00",
    },
    {
      name: "Bob Davis",
      email: "bob_davis@example.com",
      balance: 1234,
      active: false,
      register_at: "2023-04-30T00:00:00",
    },
    {
      name: "Alice Miller",
      email: "alice_miller@example.com",
      balance: 9876,
      active: false,
      register_at: "2023-08-05T00:00:00",
    },
    {
      name: "David Wilson",
      email: "david_wilson@example.com",
      balance: 5432,
      active: false,
      register_at: "2023-06-15T00:00:00",
    },
    {
      name: "Eve Moore",
      email: "eve_moore@example.com",
      balance: 8765,
      active: false,
      register_at: "2023-03-30T00:00:00",
    },
    {
      name: "Frank Taylor",
      email: "frank_taylor@example.com",
      balance: 3456,
      active: false,
      register_at: "2023-11-10T00:00:00",
    },
    {
      name: "Grace Smith",
      email: "grace_smith@example.com",
      balance: 6543,
      active: false,
      register_at: "2023-01-15T00:00:00",
    },
    {
      name: "Hannah Johnson",
      email: "hannah_johnson@example.com",
      balance: 7890,
      active: false,
      register_at: "2023-12-25T00:00:00",
    },
    {
      name: "Charlie Williams",
      email: "charlie_williams@example.com",
      balance: 2345,
      active: false,
      register_at: "2023-08-01T00:00:00",
    },
    {
      name: "John Jones",
      email: "john_jones@example.com",
      balance: 6789,
      active: false,
      register_at: "2023-09-20T00:00:00",
    },
    {
      name: "Jane Davis",
      email: "jane_davis@example.com",
      balance: 1234,
      active: false,
      register_at: "2023-05-01T00:00:00",
    },
    {
      name: "Bob Miller",
      email: "bob_miller@example.com",
      balance: 9876,
      active: false,
      register_at: "2023-08-10T00:00:00",
    },
    {
      name: "Alice Wilson",
      email: "alice_wilson@example.com",
      balance: 5432,
      active: false,
      register_at: "2023-06-20T00:00:00",
    },
    {
      name: "David Moore",
      email: "david_moore@example.com",
      balance: 8765,
      active: false,
      register_at: "2023-04-05T00:00:00",
    },
    {
      name: "Eve Taylor",
      email: "eve_taylor@example.com",
      balance: 3456,
      active: false,
      register_at: "2023-11-15T00:00:00",
    },
    {
      name: "Frank Smith",
      email: "frank_smith@example.com",
      balance: 6543,
      active: false,
      register_at: "2023-01-20T00:00:00",
    },
    {
      name: "Grace Johnson",
      email: "grace_johnson@example.com",
      balance: 7890,
      active: false,
      register_at: "2023-12-30T00:00:00",
    },
    {
      name: "Hannah Williams",
      email: "hannah_williams@example.com",
      balance: 2345,
      active: false,
      register_at: "2023-08-15T00:00:00",
    },
    {
      name: "Charlie Jones",
      email: "charlie_jones@example.com",
      balance: 6789,
      active: false,
      register_at: "2023-09-25T00:00:00",
    },
    {
      name: "John Brown",
      email: "john_brown@example.com",
      balance: 1234,
      active: false,
      register_at: "2023-05-05T00:00:00",
    },
    {
      name: "Jane Miller",
      email: "jane_miller@example.com",
      balance: 9876,
      active: false,
      register_at: "2023-08-20T00:00:00",
    },
    {
      name: "Bob Wilson",
      email: "bob_wilson@example.com",
      balance: 5432,
      active: false,
      register_at: "2023-06-25T00:00:00",
    },
    {
      name: "Alice Moore",
      email: "alice_moore@example.com",
      balance: 8765,
      active: false,
      register_at: "2023-04-10T00:00:00",
    },
    {
      name: "David Taylor",
      email: "david_taylor@example.com",
      balance: 3456,
      active: false,
      register_at: "2023-11-20T00:00:00",
    },
    {
      name: "Eve Smith",
      email: "eve_smith@example.com",
      balance: 6543,
      active: false,
      register_at: "2023-01-25T00:00:00",
    },
    {
      name: "Frank Johnson",
      email: "frank_johnson@example.com",
      balance: 7890,
      active: false,
      register_at: "2023-12-05T00:00:00",
    },
    {
      name: "Grace Williams",
      email: "grace_williams@example.com",
      balance: 2345,
      active: false,
      register_at: "2023-08-25T00:00:00",
    },
    {
      name: "Hannah Jones",
      email: "hannah_jones@example.com",
      balance: 6789,
      active: false,
      register_at: "2023-09-30T00:00:00",
    },
    {
      name: "Charlie Brown",
      email: "charlie_brown@example.com",
      balance: 1234,
      active: false,
      register_at: "2023-05-10T00:00:00",
    },
    {
      name: "John Davis",
      email: "john_davis@example.com",
      balance: 9876,
      active: false,
      register_at: "2023-08-30T00:00:00",
    },
    {
      name: "Jane Wilson",
      email: "jane_wilson@example.com",
      balance: 5432,
      active: false,
      register_at: "2023-07-05T00:00:00",
    },
    {
      name: "Bob Moore",
      email: "bob_moore@example.com",
      balance: 8765,
      active: false,
      register_at: "2023-04-15T00:00:00",
    },
    {
      name: "Alice Taylor",
      email: "alice_taylor@example.com",
      balance: 3456,
      active: false,
      register_at: "2023-11-25T00:00:00",
    },
    {
      name: "David Smith",
      email: "david_smith@example.com",
      balance: 6543,
      active: false,
      register_at: "2023-02-01T00:00:00",
    },
    {
      name: "Eve Johnson",
      email: "eve_johnson@example.com",
      balance: 7890,
      active: false,
      register_at: "2023-12-10T00:00:00",
    },
    {
      name: "Frank Williams",
      email: "frank_williams@example.com",
      balance: 2345,
      active: false,
      register_at: "2023-09-05T00:00:00",
    },
    {
      name: "Grace Jones",
      email: "grace_jones@example.com",
      balance: 6789,
      active: false,
      register_at: "2023-10-01T00:00:00",
    },
    {
      name: "Hannah Brown",
      email: "hannah_brown@example.com",
      balance: 1234,
      active: false,
      register_at: "2023-05-15T00:00:00",
    },
    {
      name: "Charlie Davis",
      email: "charlie_davis@example.com",
      balance: 9876,
      active: false,
      register_at: "2023-09-10T00:00:00",
    },
    {
      name: "John Miller",
      email: "john_miller@example.com",
      balance: 5432,
      active: false,
      register_at: "2023-07-10T00:00:00",
    },
    {
      name: "Jane Moore",
      email: "jane_moore@example.com",
      balance: 8765,
      active: false,
      register_at: "2023-04-20T00:00:00",
    },
    {
      name: "Bob Taylor",
      email: "bob_taylor@example.com",
      balance: 3456,
      active: false,
      register_at: "2023-12-01T00:00:00",
    },
    {
      name: "Alice Smith",
      email: "alice_smith@example.com",
      balance: 6543,
      active: false,
      register_at: "2023-02-05T00:00:00",
    },
    {
      name: "David Johnson",
      email: "david_johnson@example.com",
      balance: 7890,
      active: false,
      register_at: "2023-12-15T00:00:00",
    },
    {
      name: "Eve Williams",
      email: "eve_williams@example.com",
      balance: 2345,
      active: false,
      register_at: "2023-09-15T00:00:00",
    },
    {
      name: "Frank Jones",
      email: "frank_jones@example.com",
      balance: 6789,
      active: false,
      register_at: "2023-10-05T00:00:00",
    },
    {
      name: "Grace Brown",
      email: "grace_brown@example.com",
      balance: 1234,
      active: false,
      register_at: "2023-05-20T00:00:00",
    },
    {
      name: "Hannah Davis",
      email: "hannah_davis@example.com",
      balance: 9876,
      active: false,
      register_at: "2023-09-20T00:00:00",
    },
    {
      name: "Charlie Miller",
      email: "charlie_miller@example.com",
      balance: 5432,
      active: false,
      register_at: "2023-07-15T00:00:00",
    },
    {
      name: "John Wilson",
      email: "john_wilson@example.com",
      balance: 8765,
      active: false,
      register_at: "2023-04-25T00:00:00",
    },
    {
      name: "Jane Taylor",
      email: "jane_taylor@example.com",
      balance: 3456,
      active: false,
      register_at: "2023-12-05T00:00:00",
    },
    {
      name: "Bob Smith",
      email: "bob_smith@example.com",
      balance: 6543,
      active: false,
      register_at: "2023-02-10T00:00:00",
    },
    {
      name: "Alice Johnson",
      email: "alice_johnson@example.com",
      balance: 7890,
      active: false,
      register_at: "2023-12-20T00:00:00",
    },
    {
      name: "David Williams",
      email: "david_williams@example.com",
      balance: 2345,
      active: false,
      register_at: "2023-09-25T00:00:00",
    },
    {
      name: "Eve Jones",
      email: "eve_jones@example.com",
      balance: 6789,
      active: false,
      register_at: "2023-10-10T00:00:00",
    },
    {
      name: "Frank Brown",
      email: "frank_brown@example.com",
      balance: 1234,
      active: false,
      register_at: "2023-05-25T00:00:00",
    },
    {
      name: "Grace Davis",
      email: "grace_davis@example.com",
      balance: 9876,
      active: false,
      register_at: "2023-09-30T00:00:00",
    },
    {
      name: "Hannah Miller",
      email: "hannah_miller@example.com",
      balance: 5432,
      active: false,
      register_at: "2023-07-20T00:00:00",
    },
    {
      name: "Charlie Wilson",
      email: "charlie_wilson@example.com",
      balance: 8765,
      active: false,
      register_at: "2023-04-30T00:00:00",
    },
    {
      name: "John Moore",
      email: "john_moore@example.com",
      balance: 3456,
      active: false,
      register_at: "2023-12-10T00:00:00",
    },
    {
      name: "Jane Smith",
      email: "jane_smith2@example.com",
      balance: 6543,
      active: false,
      register_at: "2023-02-15T00:00:00",
    },
  ];

  return (
    <div className="relative">
      <div className="flex flex-col">
        <div className="product-list w-full flex-1 max-h-[750px] overflow-x-auto min-h-[610px] bg-gray-100 dark:bg-gray-800">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-sm max-h-[750px] overflow-auto ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Balance
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Registration
                </th>
                <th scope="col" className=" px-6 py-3">
                  Status
                </th>

                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {products.map((user, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-[#fff] dark:bg-gray-800 dark:border-gray-700 border-b hover:bg-blue-50 dark:hover:bg-gray-600 hover:cursor-pointer h-[56px]"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {user.name}
                    </th>
                    <td className="px-6 py-4">{user.balance}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.register_at}</td>
                    <td className="px-6 py-4">
                      <div className="rounded-full text-center px-4 py-2 border border-gray-300 bg-[#fff] text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        {user.active ? "Active" : "Inactive"}
                      </div>
                    </td>
                    <td className="px-6 py-4 flex items-center gap-x-4">
                      <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-[#fff] border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Edit
                      </button>
                      <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-[#fff] border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <nav
          className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 mt-auto"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white"></span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white"></span>
          </span>
          <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
              <button className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-[#fff] border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Previous
              </button>
            </li>

            <li>
              <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-[#fff] border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
