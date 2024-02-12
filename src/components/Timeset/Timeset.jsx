import React from 'react'
import Place from '../../assets/img/timeset_place.svg'
import Map from '../../assets/img/timeset_map.svg'

const Timeset = () => {
    return (
        <div className='timeset_wrap'>
            <img src={Map} alt="map" />
            <p>
                <strong>이승민</strong>님의<br />
                출퇴근/등하교<br />
                <strong>소요시간</strong>은
            </p>
            <div className="map">
                <div>
                    <img src={Place} alt="place" />
                    <img src={Place} alt="place" />
                </div>
                <div className="bar"></div>
            </div>
            <div className="timeset">
                <input type="text" placeholder='출발지' />
                <input type="text" placeholder='도착지' />
            </div>
            <div className="change">
                <p>직접 시간 입력하기</p>
                <button>확인</button>
            </div>
        </div>
    )
}

export default Timeset