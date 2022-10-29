import Link from "next/link";
import Layout from "../components/Layout";
import Service from "../components/Service";

const TermsOfService:React.FC = () => {
   return(
      <Layout title="Terms of service">
         <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]">
            <div className="container">
               <div className="flex flex-wrap mx-auto sm:max-w-screen-sm max-w-sm sm:mt-10 lg:-mt-3">
                  <div className="w-full px-4 rounded-[20px] shadow-md bg-gray-900 mb-16 sm:-mt-3 mt-5">
                     <div className="text-center mx-auto my-6 lg:mb-6 lg:mt-5 max-w-[510px]">
                        <span className="font-semibold text-lg text-primary mb-2 block text-gray-100">
                        Terms Of Service
                        </span>
                        <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                        利用規約
                        </h2>
                        <p className="text-base text-body-color text-gray-100 mx-10 text-sm">
                        この利用規約（以下、「本規約」といいます。）は、（以下、「当サービス」といいます。）<br></br>
                        がこのウェブサイト上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。<br></br>
                        登録ユーザーの皆さま（以下、「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。
                        </p>
                     </div>
                  </div>
               </div>
            <div className="flex flex-wrap -mx-4 sm:-mt-5 -mt-8 mx-10 sm:mx-0">
               <Service title="第1条（適用）"
                        text01="1.本規約は，ユーザーと当サービスとの間の本サービスの利用に関わる一切の関係に適用されるものとします。"
                        text02="2.当は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。"
                        text03="これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。"
                        text04="3.本規約の規定が個別規定と矛盾する場合には，個別規定の規定が優先されるものとします。"
               />
               <Service title="第2条（利用登録）"
                        text01="1.本サービスにおいては，登録希望者が本規約に同意の上，当の定める方法によって利用登録を申請し，"
                        text02="当サービスがこれを承認することによって，利用登録が完了するものとします。"
                        text03="2.当サービスは，利用登録の申請者に虚偽の申請や本規約への違反があると判断した場合，利用登録の申請を承認しないことがあり，"
                        text04="その理由については一切の開示義務を負わないものとします。"
               />
               <Service title="第3条（IDおよびパスワードの管理）"
                        text01="1.ユーザーは，自己の責任において，本サービスのユーザーIDおよびパスワードを適切に管理するものとします。"
                        text02="2.ユーザーは，いかなる場合にも，ユーザーIDおよびパスワードを第三者に譲渡または貸与し，もしくは第三者と共用することはできません。"
                        text03="当サービスは，ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には，"
                        text04="そのユーザーIDを登録しているユーザー自身による利用とみなします。"
               />
               <Service title="第4条（利用料金および支払方法）"
                        text01="1.本サービスは全て無料でご利用頂ける仕様となっております。"
                        text02="2.現在はございませんが，有料のサービスの提供を開始した場合に本ウェブサイトに"
                        text03="表示する利用料金を，当サービスが指定する方法により支払うものとします。"
                        text04="3.ユーザーが利用料金の支払を遅滞した場合には，ユーザーは年14．6％の割合による遅延損害金を支払うものとします。"
               />
               <Service title="第5条（禁止事項）"
                        text01="1.法令または公序良俗に違反する行為や犯罪行為に関連する行為，本サービスの内容等"
                        text02="本サービスに含まれる著作権，商標権ほか知的財産権を侵害する行為は厳しく禁止致します。"
                        text03="2.また，本サービスによって得られた情報を商業的に利用する行為や当サービスのサービスの運営を妨害するおそれのある行為，"
                        text04="3.不正アクセスをし，またはこれを試みる行為，その他，当サービスが不適切と判断する行為も厳しく禁止致します。"
               />
               <Service title="第6条（本サービスの提供の停止等）"
                        text01="1.当サービスは本サービスにかかるコンピュータシステムの保守点検または更新業務や、地震，落雷，火災，停電または"
                        text02="天災などの不可抗力により，本サービスの提供が困難となった場合等、ユーザーに事前に通知することなくサービスを中断することができるものとします。"
                        text03="2.当サービスは，本サービスの提供の停止または中断により，ユーザーまたは第三者が被ったいかなる不利益または損害についても，一切の責任を負わないものとします。"
                        text04=""
               />
               <Service title="第7条（利用制限および登録抹消）"
                        text01="1.当サービスがユーザーが当サービスの定める規約に違反した場合，事前の通知なくユーザーに対して，"
                        text02="本サービスの全部もしくは一部の利用を制限し，またはユーザーとしての登録を抹消することができるものとします。"
                        text03="2,当サービスは，当サービスがが行った行為によりユーザーに生じた損害について，一切の責任を負いません。"
                        text04=""
               />
               <Service title="第8条（サービス内容の変更等）"
                        text01="1.当サービスは，ユーザーへの事前の告知をもって、本サービスの内容を変更、"
                        text02="追加または廃止することがあり、ユーザーはこれを承諾するものとします。"
                        text03=""
                        text04=""
               />
               <Service title="第9条（個人情報の取扱い）"
                        text01="1.ユーザーと当サービスとの間の通知または連絡は，当サービスの定める方法によって行うものとします。"
                        text02="2.当サービスは,ユーザーから,当サービスが別途定める方式に従った変更届け出がない限り,"
                        text03="現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い,これらは,発信時にユーザーへ到達したものとみなします。"
                        text04=""
               />
               <Service title="第10条（権利義務の譲渡の禁止）"
                        text01="1.本サービスは全て無料でご利用頂ける仕様となっております。"
                        text02="2.現在はございませんが，有料のサービスの提供を開始した場合に本ウェブサイトに"
                        text03="表示する利用料金を，当サービスが指定する方法により支払うものとします。"
                        text04="3.ユーザーが利用料金の支払を遅滞した場合には，ユーザーは年14．6％の割合による遅延損害金を支払うものとします。"
               />
               <Service title="第11条（準拠法・裁判管轄）"
                        text01="1.本規約の解釈にあたっては，日本法を準拠法とします。"
                        text02="2.本サービスに関して紛争が生じた場合には，当サービス管理者の所在地を管轄する裁判所を専属的合意管轄とします。"
                        text03=""
                        text04=""
               />
            </div>
            <div className="flex justify-center">
         <Link href="/">
            <div className="flex cursor-pointer my-12 lg:-mb-10 mb-5 hover:text-gray-300">
            <svg
               className="w-6 h-6 mr-6"
               fill="none"
               stroke="currentColor"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
               />
            </svg>
            <span>Back to main page</span>
            </div>
         </Link>
         </div>
      </div>
      </section>
   </Layout>
   );}
export default TermsOfService;
