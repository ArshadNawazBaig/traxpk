'use client';
import { useState } from 'react';
import { Input } from './ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import Pagination from './pagination';
import { CSelect } from './select';
import { Button } from './ui/button';
import { PlusIcon, ScanBarcodeIcon, SearchIcon } from 'lucide-react';
import { Label } from './ui/label';
import Image from 'next/image';

const headers = [
  {
    Header: 'Reciept No',
    accessor: 'receipt',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Mobile Number',
    accessor: 'mobile',
  },
  {
    Header: 'No of Tags',
    accessor: 'tags',
  },
];

const dummyData = [
  {
    id: 1,
    receipt: (
      <div className="flex items-center gap-4">
        <Image src="/reciept.svg" alt="traxpk reciept" width={48} height={48} />
        <div>
          <p className="text-sm">102234599223</p>
          <p className="text-xs text-gray-400">10/18/2023 - 11:00:05</p>
        </div>
      </div>
    ),
    name: 'John Doe',
    mobile: 18824587899,
    tags: '1 tags',
    no: '102234599223',
  },
  {
    id: 2,
    receipt: (
      <div className="flex items-center gap-4">
        <Image src="/reciept.svg" alt="traxpk reciept" width={48} height={48} />
        <div>
          <p className="text-sm">102234581224</p>
          <p className="text-xs text-gray-400">10/18/2023 - 11:00:05</p>
        </div>
      </div>
    ),
    name: 'John Doe',
    mobile: 18824587899,
    tags: '1 tags',
    no: '102234581224',
  },
  {
    id: 3,
    receipt: (
      <div className="flex items-center gap-4">
        <Image src="/reciept.svg" alt="traxpk reciept" width={48} height={48} />
        <div>
          <p className="text-sm">102234581225</p>
          <p className="text-xs text-gray-400">10/18/2023 - 11:00:05</p>
        </div>
      </div>
    ),
    name: 'John Doe',
    mobile: 18824587899,
    tags: '1 tags',
    no: '102234581225',
  },
  {
    id: 4,
    receipt: (
      <div className="flex items-center gap-4">
        <Image src="/reciept.svg" alt="traxpk reciept" width={48} height={48} />
        <div>
          <p className="text-sm">102234581226</p>
          <p className="text-xs text-gray-400">10/18/2023 - 11:00:05</p>
        </div>
      </div>
    ),
    name: 'John Doe',
    mobile: 18824587899,
    tags: '1 tags',
    no: '102234581226',
  },
  {
    id: 5,
    receipt: (
      <div className="flex items-center gap-4">
        <Image src="/reciept.svg" alt="traxpk reciept" width={48} height={48} />
        <div>
          <p className="text-sm">102234581227</p>
          <p className="text-xs text-gray-400">10/18/2023 - 11:00:05</p>
        </div>
      </div>
    ),
    name: 'John Doe',
    mobile: 18824587899,
    tags: '1 tags',
    no: '102234581227',
  },
  {
    id: 6,
    receipt: (
      <div className="flex items-center gap-4">
        <Image src="/reciept.svg" alt="traxpk reciept" width={48} height={48} />
        <div>
          <p className="text-sm">102234581228</p>
          <p className="text-xs text-gray-400">10/18/2023 - 11:00:05</p>
        </div>
      </div>
    ),
    name: 'John Doe',
    mobile: 18824587899,
    tags: '1 tags',
    no: '102234581228',
  },
  {
    id: 7,
    receipt: (
      <div className="flex items-center gap-4">
        <Image src="/reciept.svg" alt="traxpk reciept" width={48} height={48} />
        <div>
          <p className="text-sm">102234581229</p>
          <p className="text-xs text-gray-400">10/18/2023 - 11:00:05</p>
        </div>
      </div>
    ),
    name: 'John Doe',
    mobile: 18824587899,
    tags: '1 tags',
    no: '102234581229',
  },
  {
    id: 8,
    receipt: (
      <div className="flex items-center gap-4">
        <Image src="/reciept.svg" alt="traxpk reciept" width={48} height={48} />
        <div>
          <p className="text-sm">102234581223</p>
          <p className="text-xs text-gray-400">10/18/2023 - 11:00:05</p>
        </div>
      </div>
    ),
    name: 'John Doe',
    mobile: 18824587899,
    tags: '1 tags',
    no: '102234581223',
  },
  {
    id: 9,
    receipt: (
      <div className="flex items-center gap-4">
        <Image src="/reciept.svg" alt="traxpk reciept" width={48} height={48} />
        <div>
          <p className="text-sm">102234581223</p>
          <p className="text-xs text-gray-400">10/18/2023 - 11:00:05</p>
        </div>
      </div>
    ),
    name: 'John Doe',
    mobile: 18824587899,
    tags: '1 tags',
    no: '102234581223',
  },
  {
    id: 10,
    receipt: (
      <div className="flex items-center gap-4">
        <Image src="/reciept.svg" alt="traxpk reciept" width={48} height={48} />
        <div>
          <p className="text-sm">102234581223</p>
          <p className="text-xs text-gray-400">10/18/2023 - 11:00:05</p>
        </div>
      </div>
    ),
    name: 'John Doe',
    mobile: 18824587899,
    tags: '1 tags',
    no: '102234581223',
  },
  {
    id: 11,
    receipt: (
      <div className="flex items-center gap-4">
        <Image src="/reciept.svg" alt="traxpk reciept" width={48} height={48} />
        <div>
          <p className="text-sm">102234581223</p>
          <p className="text-xs text-gray-400">10/18/2023 - 11:00:05</p>
        </div>
      </div>
    ),
    name: 'John Doe',
    mobile: 18824587899,
    tags: '1 tags',
    no: '102234581223',
  },
  {
    id: 12,
    receipt: (
      <div className="flex items-center gap-4">
        <Image src="/reciept.svg" alt="traxpk reciept" width={48} height={48} />
        <div>
          <p className="text-sm">102234581223</p>
          <p className="text-xs text-gray-400">10/18/2023 - 11:00:05</p>
        </div>
      </div>
    ),
    name: 'John Doe',
    mobile: 18824587899,
    tags: '1 tags',
    no: '102234581223',
  },
];

const TableComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [type, setType] = useState('Unclaimed');

  const filteredData = dummyData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.no.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  const handleType = (value) => {
    setType(value);
  };

  return (
    <div className="">
      <div className="grid grid-cols-12 gap-4 mb-3 border-b border-gray-300 pb-4">
        <div className="col-span-4">
          <div className="flex gap-4 w-full">
            <div className="relative flex items-center w-full">
              <SearchIcon className="absolute w-[18px] h-[18px] left-3 text-gray-500" />
              <Input
                type="text"
                placeholder="Search..."
                className="pl-9 outline-none focus-vi:ring-0 focus:box-shadow-none rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-48">
              <CSelect
                label="Items per page"
                className="rounded-lg"
                value={type}
                onChange={handleType}
                options={['Unclaimed', 'Claimed']}
              />
            </div>
          </div>
        </div>
        <div className="col-span-8">
          <div className="flex items-center justify-end gap-4">
            <Label className="font-normal text-gray-500">Rows per page</Label>
            <div className="w-16">
              <CSelect
                label="Items per page"
                value={itemsPerPage}
                className="rounded-lg"
                options={[5, 10, 20, 30, 50]}
                onChange={handleItemsPerPageChange}
              />
            </div>
            <Pagination
              currentPage={currentPage}
              totalCount={filteredData.length}
              itemsPerPage={itemsPerPage}
              onPageChange={handlePageChange}
            />
            <Button className="rounded-full bg-gradient-to-r from-[#FF551F] to-[#E12B62]">
              <PlusIcon className="w-4 h-4 mr-2" />
              Add Bag
            </Button>
          </div>
        </div>
      </div>
      <Table>
        {/* Table Header */}
        <TableHeader>
          <TableRow>
            {headers.map((header) => (
              <TableHead className="text-[#0B6D56]" key={header.accessor}>
                {header.Header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        {/* Table Body */}

        <TableBody>
          {paginatedData.map((item) => (
            <TableRow
              key={item.id}
              className="bg-white rounded-full hover:bg-gray-100 border-b-8 border-gray-200 w-full"
            >
              <TableCell className="font-medium">{item.receipt}</TableCell>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.mobile}</TableCell>
              <TableCell>{item.tags}</TableCell>
              <TableCell className="text-right">
                <Button className="rounded-full" variant="outline" size="">
                  <ScanBarcodeIcon className="w-4 h-4 mr-2 text-red-500" />{' '}
                  Claim
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableComponent;
