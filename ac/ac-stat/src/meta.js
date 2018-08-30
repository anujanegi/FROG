// @flow

export default {
  name: 'Statistical intuition',
  shortDesc: 'Allow the student to see various plots of some data',
  description:
    'Allow the student to see various plots of data chosen by the teacher or the student',
  exampleData: [
    {
      title: '1 trace 1 axis',
      config: { title: 'Graph1', plotType: 'all' },
      data: [
        { trace: 'dataset1', size: 1.8 },
        { trace: 'dataset1', size: 1.6 },
        { trace: 'dataset1', size: 1.6 },
        { trace: 'dataset1', size: 1.65 },
        { trace: 'dataset1', size: 1.9 },
        { trace: 'dataset1', size: 1.62 },
        { trace: 'dataset1', size: 1.76 },
        { trace: 'dataset1', size: 1.74 },
        { trace: 'dataset1', size: 1.82 },
        { trace: 'dataset1', size: 1.7 }
      ]
    },
    {
      title: '1 trace 2 axis',
      config: { title: 'Graph2', plotType: 'all' },
      data: [
        { trace: 'dataset1', size: 1.5, sex: 'F' },
        { trace: 'dataset1', size: 1.54, sex: 'F' },
        { trace: 'dataset1', size: 1.79, sex: 'M' },
        { trace: 'dataset1', size: 1.85, sex: 'M' },
        { trace: 'dataset1', size: 1.64, sex: 'M' },
        { trace: 'dataset1', size: 1.72, sex: 'F' },
        { trace: 'dataset1', size: 1.76, sex: 'M' },
        { trace: 'dataset1', size: 1.74, sex: 'M' },
        { trace: 'dataset1', size: 1.82, sex: 'F' },
        { trace: 'dataset1', size: 1.7, sex: 'F' }
      ]
    },
    {
      title: '2 trace 1 axis',
      config: { title: 'Graph3', plotType: 'all' },
      data: [
        { trace: 'dataset1', size: 1.8 },
        { trace: 'dataset1', size: 1.6 },
        { trace: 'dataset1', size: 1.6 },
        { trace: 'dataset1', size: 1.65 },
        { trace: 'dataset1', size: 1.9 },
        { trace: 'dataset2', size: 1.62 },
        { trace: 'dataset2', size: 1.76 },
        { trace: 'dataset2', size: 1.74 },
        { trace: 'dataset2', size: 1.82 },
        { trace: 'dataset2', size: 1.7 },
        { trace: 'dataset2', size: 1.5 },
        { trace: 'dataset1', size: 1.54 },
        { trace: 'dataset2', size: 1.79 },
        { trace: 'dataset1', size: 1.85 },
        { trace: 'dataset2', size: 1.99 }
      ]
    },
    {
      title: 'official data',
      config: { title: 'Graph3', plotType: 'all', editable: true },
      data: [
        { trace: 'dataset1', x: 100.127591586473 },
        { trace: 'dataset2', x: 142.200326908982 },
        { trace: 'dataset1', x: 104.228083640848 },
        { trace: 'dataset2', x: 212.495335222053 },
        { trace: 'dataset1', x: 101.091880671324 },
        { trace: 'dataset2', x: 82.53909500264 },
        { trace: 'dataset1', x: 101.056905943826 },
        { trace: 'dataset2', x: -17.4383768501217 },
        { trace: 'dataset1', x: 101.505252708646 },
        { trace: 'dataset2', x: 20.1223747606454 },
        { trace: 'dataset1', x: 98.9311735299928 },
        { trace: 'dataset2', x: 256.788457056581 },
        { trace: 'dataset1', x: 99.3678039568268 },
        { trace: 'dataset2', x: 23.3898829334574 },
        { trace: 'dataset1', x: 98.3408966054052 },
        { trace: 'dataset2', x: 134.820279946787 },
        { trace: 'dataset1', x: 100.146301303552 },
        { trace: 'dataset2', x: 32.762159526723 },
        { trace: 'dataset1', x: 99.8492753979028 },
        { trace: 'dataset2', x: 96.6725447818809 },
        { trace: 'dataset1', x: 98.0118475521057 },
        { trace: 'dataset2', x: 22.4135645485126 },
        { trace: 'dataset1', x: 101.150117395606 },
        { trace: 'dataset2', x: 213.351555644314 },
        { trace: 'dataset1', x: 100.568554053189 },
        { trace: 'dataset2', x: 235.994818428046 },
        { trace: 'dataset1', x: 100.366304433246 },
        { trace: 'dataset2', x: 66.7856863669745 },
        { trace: 'dataset1', x: 98.8026798579433 },
        { trace: 'dataset2', x: 159.483265581399 },
        { trace: 'dataset1', x: 100.102837175824 },
        { trace: 'dataset2', x: 56.0179762929274 },
        { trace: 'dataset1', x: 100.152485454613 },
        { trace: 'dataset2', x: 34.4261251990688 },
        { trace: 'dataset1', x: 99.1984164994169 },
        { trace: 'dataset2', x: 160.467049404482 },
        { trace: 'dataset1', x: 99.724508166189 },
        { trace: 'dataset2', x: 183.723876768245 },
        { trace: 'dataset1', x: 104.862065398848 },
        { trace: 'dataset2', x: 241.797507488935 },
        { trace: 'dataset1', x: 101.274870026517 },
        { trace: 'dataset2', x: 189.716365629534 },
        { trace: 'dataset1', x: 99.9245374519329 },
        { trace: 'dataset2', x: 195.488143036407 },
        { trace: 'dataset1', x: 100.747203627779 },
        { trace: 'dataset2', x: 39.8292429381981 },
        { trace: 'dataset1', x: 101.403458450716 },
        { trace: 'dataset2', x: 39.2182483879074 },
        { trace: 'dataset1', x: 100.461735771488 },
        { trace: 'dataset2', x: 293.923301917412 },
        { trace: 'dataset1', x: 99.5595772370341 },
        { trace: 'dataset2', x: 52.8362977343818 },
        { trace: 'dataset1', x: 99.4278040100073 },
        { trace: 'dataset2', x: -25.0853230981056 },
        { trace: 'dataset1', x: 98.9622247284821 },
        { trace: 'dataset2', x: 153.092794171143 },
        { trace: 'dataset1', x: 99.3326570605877 },
        { trace: 'dataset2', x: 113.11807591951 },
        { trace: 'dataset1', x: 98.0187344324791 },
        { trace: 'dataset2', x: 50.9287490459392 },
        { trace: 'dataset1', x: 101.108293228979 },
        { trace: 'dataset2', x: -48.0685468456033 },
        { trace: 'dataset1', x: 97.353571589331 },
        { trace: 'dataset2', x: 197.696176950576 },
        { trace: 'dataset1', x: 104.603803228976 },
        { trace: 'dataset2', x: 118.554646543002 },
        { trace: 'dataset1', x: 99.3464233605161 },
        { trace: 'dataset2', x: 21.9833357394763 },
        { trace: 'dataset1', x: 102.627559181907 },
        { trace: 'dataset2', x: 142.91811145709 },
        { trace: 'dataset1', x: 99.2198027622786 },
        { trace: 'dataset2', x: 82.9612212912342 },
        { trace: 'dataset1', x: 101.249456566952 },
        { trace: 'dataset2', x: 88.6285246457044 },
        { trace: 'dataset1', x: 100.719549238472 },
        { trace: 'dataset2', x: 31.2741026682574 },
        { trace: 'dataset1', x: 95.9189752663048 },
        { trace: 'dataset2', x: 50.6891353847307 },
        { trace: 'dataset1', x: 97.9431681286933 },
        { trace: 'dataset2', x: -1.8306979944326 },
        { trace: 'dataset1', x: 98.6110599323961 },
        { trace: 'dataset2', x: 235.518962510562 },
        { trace: 'dataset1', x: 100.385185816859 },
        { trace: 'dataset2', x: 49.6261108921357 },
        { trace: 'dataset1', x: 97.7630856218184 },
        { trace: 'dataset2', x: 216.915150507057 },
        { trace: 'dataset1', x: 99.5109452270317 },
        { trace: 'dataset2', x: 60.9584615770625 },
        { trace: 'dataset1', x: 101.165119598777 },
        { trace: 'dataset2', x: -5.30916434250128 },
        { trace: 'dataset1', x: 100.966588903418 },
        { trace: 'dataset2', x: 68.0195992501093 },
        { trace: 'dataset1', x: 101.703294611757 },
        { trace: 'dataset2', x: 107.127265743578 },
        { trace: 'dataset1', x: 101.924610943258 },
        { trace: 'dataset2', x: 224.839023700564 },
        { trace: 'dataset1', x: 100.025960320395 },
        { trace: 'dataset2', x: 195.036759137477 },
        { trace: 'dataset1', x: 100.062829101005 },
        { trace: 'dataset2', x: 33.2035472125682 },
        { trace: 'dataset1', x: 98.4738572690643 },
        { trace: 'dataset2', x: 252.79809999748 },
        { trace: 'dataset1', x: 102.073357194692 },
        { trace: 'dataset2', x: 237.670745032649 },
        { trace: 'dataset1', x: 100.022097020983 },
        { trace: 'dataset2', x: 12.8801159832995 },
        { trace: 'dataset1', x: 100.747374523285 },
        { trace: 'dataset2', x: 130.508082125923 },
        { trace: 'dataset1', x: 102.159783248978 },
        { trace: 'dataset2', x: 84.5531024885839 },
        { trace: 'dataset1', x: 101.454881314558 },
        { trace: 'dataset2', x: 38.2232515941701 },
        { trace: 'dataset1', x: 100.373550663268 },
        { trace: 'dataset2', x: 6.39993283246636 },
        { trace: 'dataset1', x: 97.9054685878126 },
        { trace: 'dataset2', x: 272.334741756041 },
        { trace: 'dataset1', x: 99.6193877649245 },
        { trace: 'dataset2', x: 217.281793614263 },
        { trace: 'dataset1', x: 100.757580837362 },
        { trace: 'dataset2', x: 184.727149320358 },
        { trace: 'dataset1', x: 99.8978304327028 },
        { trace: 'dataset2', x: 151.13500310415 },
        { trace: 'dataset1', x: 99.2043435214106 },
        { trace: 'dataset2', x: 41.4944556608825 },
        { trace: 'dataset1', x: 96.7374601669981 },
        { trace: 'dataset2', x: 93.1083639590458 },
        { trace: 'dataset1', x: 99.9583118059911 },
        { trace: 'dataset2', x: -12.6020943040686 },
        { trace: 'dataset1', x: 99.3563223012345 },
        { trace: 'dataset2', x: 184.363269051776 },
        { trace: 'dataset1', x: 99.4825701153008 },
        { trace: 'dataset2', x: 167.020734439119 },
        { trace: 'dataset1', x: 97.5168218279992 },
        { trace: 'dataset2', x: 200.973197670176 },
        { trace: 'dataset1', x: 99.8353638780729 },
        { trace: 'dataset2', x: 85.0080185238426 },
        { trace: 'dataset1', x: 100.649457679613 },
        { trace: 'dataset2', x: 52.4240202496273 },
        { trace: 'dataset1', x: 99.461917739816 },
        { trace: 'dataset2', x: 55.3959361250155 },
        { trace: 'dataset1', x: 99.6112690808403 },
        { trace: 'dataset2', x: 8.29581011244791 },
        { trace: 'dataset1', x: 100.565337145664 },
        { trace: 'dataset2', x: 3.67704455115954 },
        { trace: 'dataset1', x: 100.458717405212 },
        { trace: 'dataset2', x: 56.4945067721894 },
        { trace: 'dataset1', x: 92.457359575785 },
        { trace: 'dataset2', x: -9.27903715626214 },
        { trace: 'dataset1', x: 101.311209444468 },
        { trace: 'dataset2', x: 53.1549429798404 },
        { trace: 'dataset1', x: 98.8666916325742 },
        { trace: 'dataset2', x: 71.6742783736231 },
        { trace: 'dataset1', x: 100.414136803262 },
        { trace: 'dataset2', x: 204.628524751678 },
        { trace: 'dataset1', x: 91.661835115145 },
        { trace: 'dataset2', x: 30.6241158394485 },
        { trace: 'dataset1', x: 98.4216325356281 },
        { trace: 'dataset2', x: 198.12271697097 },
        { trace: 'dataset1', x: 100.151232703533 },
        { trace: 'dataset2', x: -14.3840224011443 },
        { trace: 'dataset1', x: 100.033454772807 },
        { trace: 'dataset2', x: 11.4755398102979 },
        { trace: 'dataset1', x: 99.407373906487 },
        { trace: 'dataset2', x: 107.433804107597 },
        { trace: 'dataset1', x: 100.508535315468 },
        { trace: 'dataset2', x: 59.3408243685259 },
        { trace: 'dataset1', x: 99.3184555008676 },
        { trace: 'dataset2', x: 189.438551397729 },
        { trace: 'dataset1', x: 100.048727832631 },
        { trace: 'dataset2', x: 59.3953044956584 },
        { trace: 'dataset1', x: 100.248155305125 },
        { trace: 'dataset2', x: 205.968007359769 },
        { trace: 'dataset1', x: 99.967574989022 },
        { trace: 'dataset2', x: 215.982394513543 },
        { trace: 'dataset1', x: 99.3878640292173 },
        { trace: 'dataset2', x: 28.8643797438508 },
        { trace: 'dataset1', x: 99.7736026654162 },
        { trace: 'dataset2', x: 162.6381979212 },
        { trace: 'dataset1', x: 100.724284721302 },
        { trace: 'dataset2', x: 81.7931288489134 },
        { trace: 'dataset1', x: 100.295162708918 },
        { trace: 'dataset2', x: 199.266051874681 },
        { trace: 'dataset1', x: 101.767011130554 },
        { trace: 'dataset2', x: 260.909561164661 },
        { trace: 'dataset1', x: 100.40655269435 },
        { trace: 'dataset2', x: 96.6271882831775 },
        { trace: 'dataset1', x: 100.439418861391 },
        { trace: 'dataset2', x: 155.062875509413 },
        { trace: 'dataset1', x: 99.7684890592717 },
        { trace: 'dataset2', x: 75.7860332397715 },
        { trace: 'dataset1', x: 98.8529463450544 },
        { trace: 'dataset2', x: 70.7170347344302 },
        { trace: 'dataset1', x: 103.440531226281 },
        { trace: 'dataset2', x: 265.286103832494 },
        { trace: 'dataset1', x: 100.786977087626 },
        { trace: 'dataset2', x: 174.377101321875 },
        { trace: 'dataset1', x: 99.2775326938985 },
        { trace: 'dataset2', x: 91.3656579774165 },
        { trace: 'dataset1', x: 100.684548186276 },
        { trace: 'dataset2', x: 66.6335252661508 }
      ]
    }
  ]
};
