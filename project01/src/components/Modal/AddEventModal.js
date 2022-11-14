import { Space } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generatePicker from 'antd/es/date-picker/generatePicker';
import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import locale from 'antd/es/date-picker/locale/ko_KR';

const AddEventModal = ({
	isOpen,
	onClose,
	onEventAdd,
	event,
	modalState,
	onEventUpdate,
	onEventDelete,
}) => {
	const [title, setTitle] = useState(event.title);
	const [start, setStart] = useState(event.start);
	const [end, setEnd] = useState(event.end);

	const DatePicker = generatePicker(dayjsGenerateConfig);
	const { RangePicker } = DatePicker;

	useEffect(() => {
		setTitle(event.title);
		setStart(event.start);
		setEnd(event.end);
	}, [event]);

	/** 캘린더 이벤트 전송 */
	const onSubmit = (e) => {
		e.preventDefault();

		onEventAdd({
			title,
			start,
			end,
		});
		onClose();
	};

	const onUpdate = () => {
		onEventUpdate({
			title,
			start,
			end,
		});
		onClose();
	};

	const onDelete = (e) => {
		onEventDelete();
		onClose();
	};

	return (
		<ReactModal
			className={'calendarModal'}
			isOpen={isOpen}
			onRequestClose={onClose}
		>
			<div className='calendarForm'>
				<label>
					<h4>일정</h4>
					<input
						id='scheduleTitle'
						defaultValue={event.title}
						placeholder='일정'
						onChange={(e) => setTitle(e.target.value)}
					/>
				</label>

				<label>
					<h4>날짜</h4>
					<Space direction='vertical'>
						<RangePicker
							value={[dayjs(start), dayjs(end)]}
							showTime={{
								format: 'HH:MM',
							}}
							format='YYYY-MM-DD HH:MM'
							locale={locale}
							onChange={(date) => {
								setStart(date[0].toDate());
								setEnd(date[1].toDate());
							}}
						/>
					</Space>
				</label>

				{modalState.state === 'add' && (
					<button disabled={!title} onClick={onSubmit}>
						일정 추가
					</button>
				)}
				{modalState.state === 'update' && (
					<>
						<button onClick={onUpdate}> 일정 수정</button>
						<button onClick={onDelete}> 일정 삭제</button>
					</>
				)}
			</div>
		</ReactModal>
	);
};

export default AddEventModal;
