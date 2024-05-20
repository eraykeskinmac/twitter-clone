import React, { useCallback } from 'react';

import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { BiHash, BiHomeCircle, BiMoney, BiUser } from 'react-icons/bi';
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from 'react-icons/bs';
import { SlOptions } from 'react-icons/sl';

import FeedCard from '@/components/FeedCard';

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const SidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: 'Home',
    icon: <BiHomeCircle />,
  },
  {
    title: 'Explore',
    icon: <BiHash />,
  },
  {
    title: 'Notifications',
    icon: <BsBell />,
  },
  {
    title: 'Messages',
    icon: <BsEnvelope />,
  },
  {
    title: 'Bookmarks',
    icon: <BsBookmark />,
  },
  {
    title: 'Twitter Blue',
    icon: <BiMoney />,
  },
  {
    title: 'Profile',
    icon: <BiUser />,
  },
  {
    title: 'More Options',
    icon: <SlOptions />,
  },
];

export default function Home() {
  const handleLoginWithGoogle = useCallback(
    (cred: CredentialResponse) => {},
    [],
  );

  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-1  ml-28">
          <div className="text-2xl h-fit w-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className="mt-1 text-1xl font-bold pr-4">
            <ul>
              {SidebarMenuItems.map((item) => (
                <li
                  key={item.title}
                  className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-1 w-fit mt-2"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3">
              <button
                className="bg-[#1d9bf0] font-semibold text-lg
               py-2 px-4 rounded-full w-full"
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-4  border-r-[1px] border-l-[1px] h-screen overflow-scroll border-gray-600">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3 p-5">
          <div className="border p-5 bg-slate-700 rounded-lg">
            <h1 className="my-2 text-2xl">New to Twitter?</h1>
            <GoogleLogin onSuccess={(cred) => console.log(cred)} />
          </div>
        </div>
      </div>
    </div>
  );
}
