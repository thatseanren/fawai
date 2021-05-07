import DataSet from '../styles/DataSet.module.css'


export default function My() {
  return (
    <div>
        <div className={DataSet.left}>
            <div className={DataSet.boxList}>
                <div className={DataSet.boxTitle}>
                    数据格式
                </div>
                <div className={DataSet.boxSpan}>
                    <div className={DataSet.boxSpanList}>
                        All
                    </div>
                    <div className={DataSet.boxSpanList}>
                        3D Model
                    </div>
                    <div className={DataSet.boxSpanList}>
                        Audio
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
