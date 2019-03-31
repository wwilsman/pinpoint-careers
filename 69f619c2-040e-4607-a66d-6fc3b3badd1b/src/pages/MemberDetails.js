import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
  let { name, title, location, avatar } = member;

  return (
    <div style={{ background: 'white', marginLeft: 30, padding: 30 }}>
      <div style={{ marginBottom: 30 }}>
        <img alt="" src={avatar} style={{ verticalAlign: 'middle', marginRight: 20 }}/>
        <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
          {name.first} {name.last}<br/>
          {title}<br/>
          {location.city}, {location.state}
        </div>
      </div>
      <table style={{ width: '100%' }}>
        <thead>
          <tr style={{ fontWeight: 700 }}>
            <td>File</td>
            <td>Type</td>
            <td>Version</td>
            <td>Source</td>
          </tr>
        </thead>
        <tbody>
          {files.map((data, i) => (
            <tr key={i}>
              <td>{data.file}</td>
              <td>{data.type}</td>
              <td>{data.version}</td>
              <td>{data.commit.source} ({data.commit.hash.substr(data.commit.hash.length - 4)})</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
