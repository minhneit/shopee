import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import ListItem from '../ListItem'
import { itemData, itemDataa } from '~/data'

export default function Footer() {
    return (
        <footer className='py-16 bg-neutral-100 text-grey'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='grid grid-cols-2 lg:grid-cols-5 '>
                    <ListItem link={itemData.href} title='Chăm sóc khách hàng' />
                    <ListItem link={itemDataa.href} title='Chăm sóc khách hàng' />
                    <div className='text-xs'>
                        <h3 className='text-black font-bold mb-8'>Chăm sóc khách hàng</h3>
                        <ul>
                            <li>Trung Tâm Trợ Giúp</li>
                            <li>Shopee Blog</li>
                            <li>Shopee Mall</li>
                            <li>Hướng Dẫn Mua Hàng</li>
                            <li>Hướng Dẫn Bán Hàng</li>
                            <li>Thanh Toán</li>
                            <li>Shopee Xu</li>
                            <li>Vận Chuyển</li>
                            <li>Trả Hàng & Hoàn Tiền</li>
                            <li>Chăm Sóc Khách Hàng</li>
                            <li>Chính Sách Bảo Hành</li>
                        </ul>
                    </div>

                    <div className='text-xs'>
                        <h3 className='text-black font-bold mb-8'>VỀ SHOPEE</h3>
                        <ul>
                            <li>Giới Thiệu Về Shopee Việt Nam</li>
                            <li>Tuyển Dụng</li>
                            <li>Điều Khoản Shopee</li>
                            <li>Chính Sách Bảo Mật</li>
                            <li>Chính Hãng</li>
                            <li>Kênh Người Bán</li>
                            <li>Flash Sales</li>
                            <li>Chương Trình Tiếp Thị Liên Kết Shopee</li>
                            <li>Liên Hệ Với Truyền Thông</li>
                        </ul>
                    </div>

                    <div className='text-xs'>
                        <h3 className='text-black font-bold mb-8'>THANH TOÁN</h3>
                        <ul className='grid grid-cols-3 '>
                            <li className='flex justify-center rounded-md p-1 w-[42px] lg:w-[52px] bg-white mb-3 mr-3'>
                                <img
                                    src='https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8'
                                    alt=''
                                />
                            </li>
                            <li className='flex justify-center rounded-md p-1 w-[42px] lg:w-[52px] bg-white mb-3 mr-3'>
                                <img
                                    src='https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16'
                                    alt=''
                                />
                            </li>
                            <li className='flex justify-center rounded-md p-1 w-[42px] lg:w-[52px] bg-white mb-3 mr-3'>
                                <img
                                    src='https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08'
                                    alt=''
                                />
                            </li>
                            <li className='flex justify-center rounded-md p-1 w-[42px] lg:w-[52px] bg-white mb-3 mr-3'>
                                <img
                                    src='https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c'
                                    alt=''
                                />
                            </li>
                            <li className='flex justify-center rounded-md p-1 w-[42px] lg:w-[52px] bg-white mb-3 mr-3'>
                                <img
                                    src='https://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281'
                                    alt=''
                                />
                            </li>
                            <li className='flex justify-center rounded-md p-1 w-[42px] lg:w-[52px] bg-white mb-3 mr-3'>
                                <img
                                    src='https://down-vn.img.susercontent.com/file/5e3f0bee86058637ff23cfdf2e14ca09'
                                    alt=''
                                />
                            </li>
                            <li className='flex justify-center rounded-md p-1 w-[42px] lg:w-[52px] bg-white mb-3 mr-3'>
                                <img
                                    src='https://down-vn.img.susercontent.com/file/9263fa8c83628f5deff55e2a90758b06'
                                    alt=''
                                />
                            </li>
                            <li className='flex justify-center rounded-md p-1 w-[42px] lg:w-[52px] bg-white mb-3 mr-3'>
                                <img
                                    src='https://down-vn.img.susercontent.com/file/0217f1d345587aa0a300e69e2195c492'
                                    alt=''
                                />
                            </li>
                        </ul>
                    </div>

                    <div className='text-xs'>
                        <h3 className='text-black font-bold mb-8'>THEO DÕI CHÚNG TÔI TRÊN</h3>
                        <ul>
                            <li className='flex'>
                                <BsFacebook className='text-base mr-1' />
                                Facebook
                            </li>
                            <li className='flex'>
                                <AiFillInstagram className='text-base mr-1' />
                                Instagram
                            </li>
                            <li className='flex'>
                                <AiFillLinkedin className='text-base mr-1' />
                                LinkedIn
                            </li>
                        </ul>
                    </div>

                    <div className='text-xs'>
                        <h3 className='text-black font-bold mb-8'>TẢI ỨNG DỤNG SHOPEE NGAY THÔI</h3>
                        <div className='grid grid-cols-2'>
                            <img
                                src='https://down-vn.img.susercontent.com/file/a5e589e8e118e937dc660f224b9a1472'
                                alt=''
                            />
                            <div className='w-full flex flex-col items-start justify-center'>
                                <img
                                    className='w-[68px] h-[16px] mb-3'
                                    src='https://down-vn.img.susercontent.com/file/ad01628e90ddf248076685f73497c163'
                                    alt=''
                                />
                                <img
                                    className='w-[68px] h-[16px] mb-3 ml-1'
                                    src='https://down-vn.img.susercontent.com/file/ae7dced05f7243d0f3171f786e123def'
                                    alt=''
                                />
                                <img
                                    className='w-[68px] h-[16px] mb-3'
                                    src='https://down-vn.img.susercontent.com/file/35352374f39bdd03b25e7b83542b2cb0'
                                    alt=''
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border-t-2 mt-16'></div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10 text-sm '>
                    <div className='lg:col-span-1'>
                        <div>© 2023 Shopee.Tất cả các quyền được bảo lưu.</div>
                    </div>
                    <div className='lg:col-span-2'>
                        <div>
                            Quốc gia & Khu vực: Singapore Indonesia Đài Loan Thái Lan Malaysia Việt Nam Philippines
                            Brazil México Colombia Chile
                        </div>
                    </div>
                </div>

                <div className='text-center text-xs  mt-10'>
                    <div>Công ty TNHH Shopee</div>
                    <div className='mt-4'>
                        Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba
                        Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
                    </div>
                    <div className='mt-4'>
                        Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)
                    </div>
                    <div className='mt-4'>
                        Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015
                    </div>
                    <div className='mt-4'>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</div>
                </div>
            </div>
        </footer>
    )
}
