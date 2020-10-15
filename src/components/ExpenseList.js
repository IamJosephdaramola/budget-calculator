/** @format */

import React, { Fragment } from 'react';
import { MdDelete } from 'react-icons/md';
import Item from './ExpenseItem';

const ExpenseList = ({ expenses, handleEdit, handleDelete, clearItems }) => {
	return (
		<Fragment>
			<ul className='list'>
				{expenses.map((expense) => (
					<Item
						key={expense.id}
						{...expense}
						handleDelete={handleDelete}
						handleEdit={handleEdit}
					/>
				))}
			</ul>
			{expenses.length > 0 && (
				<button className='btn' onClick={clearItems}>
					clear expenses
					<MdDelete className='btn-icon' />
				</button>
			)}
		</Fragment>
	);
};

export default ExpenseList;
