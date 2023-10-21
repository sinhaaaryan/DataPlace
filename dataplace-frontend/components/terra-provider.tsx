// "use client";
// import React, { ReactNode } from 'react';
// import TerraContext from '@/context/terra-context';
// import Terra from "terra-api";

// interface TerraProviderProps {
//   children: ReactNode;
// }

// const TerraProvider: React.FC<TerraProviderProps> = ({ children }) => {
//   const terra = new Terra(
//     process.env.REACT_APP_TERRA_DEV_ID ?? "",
//     process.env.REACT_APP_TERRA_API_KEY ?? "",
//     process.env.REACT_APP_TERRA_WEBHOOK_SECRET ?? ""
//   );

//   return (
//     <TerraContext.Provider value={terra}>
//       {children}
//     </TerraContext.Provider>
//   );
// };

// export default TerraProvider;
