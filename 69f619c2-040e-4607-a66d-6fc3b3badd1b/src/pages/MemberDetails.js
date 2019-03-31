import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MemberContainer from '../components/MemberContainer';
import MemberHeader from '../components/MemberHeader';
import MemberNav from '../components/MemberNav';
import Table from '../components/Table';

function useFiles(memberId) {
  let [files, setFiles] = useState([]);

  useEffect(() => {
    axios
      .get(`http://www.mocky.io/v2/5c9d99b13300005b003f2382?employee=${memberId}`)
      .then(({ data }) => setFiles(data));
  }, [memberId]);

  return files;
}

export default function MemberDetails({
  memberId,
  member
}) {
  let files = useFiles(memberId);

  return (
    <MemberContainer>
      <MemberHeader {...member}/>
      <MemberNav/>

      <Table
        head={['File', 'Type', 'Version', 'Source']}
        items={files.map(data => {
          let { source, hash } = data.commit;
          let src = `${source} (${hash.substr(hash.length - 4)})`;
          return [data.file, data.type, data.version, src];
        })}
      />
    </MemberContainer>
  );
}
