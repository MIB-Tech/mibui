import React, {useEffect, useId, useMemo, useState} from 'react';
import {Stimulsoft} from 'stimulsoft-reports-js/Scripts/stimulsoft.viewer';

type ReportViewerProps = {
  fileName: string
  params?: object
}

const ReportViewer: React.FC<ReportViewerProps> = ({fileName, params}) => {
  const id = useId();
  const [viewer, setViewer] = useState(new Stimulsoft.Viewer.StiViewer(undefined, 'StiViewer', false));

  const report = useMemo(() => {
    const reportInstance = new Stimulsoft.Report.StiReport();
    reportInstance.loadFile(`/${fileName}`);
    reportInstance.regData('JsonData', 'JsonData', params);
    return reportInstance;
  }, [fileName, params]);

  useEffect(() => {
    setViewer((currentViewer) => {
      currentViewer.report = report;
      return currentViewer;
    });

    viewer.renderHtml(id);
  }, [report, viewer, id]);

  return (
    <div id={id}/>
  );
};

export default ReportViewer;
