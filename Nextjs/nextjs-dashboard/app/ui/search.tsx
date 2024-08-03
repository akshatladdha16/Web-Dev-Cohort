'use client';
import {useDebouncedCallback} from 'use-debounce'
///us cleint is for use ecvent listeners and hooks to keep check on anything happending from user side
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams=useSearchParams();
  const pathname=usePathname();
  const {replace}=useRouter();
  const handleSearch=useDebouncedCallback((term)=>{
    const params=new URLSearchParams(searchParams); 
    console.log(`Searching... ${term}`);
    /// to capture the input and show it in url: URLSearchParams is a web api provides utility methods for manipulating url
    params.set('page','1');
    if(term){
      params.set('query',term)
    }else{
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  },300);
    // updates the URL with the user's search data. For example, /dashboard/invoices?query=lee if the user searches for "Lee"
     /// url will be updated without reloading the page
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e)=>{
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
        //keeps input field and url in sync and using default value it will manage it's own state
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}