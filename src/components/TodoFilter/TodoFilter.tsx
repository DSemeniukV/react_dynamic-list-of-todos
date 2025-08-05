import React from 'react';

type Props = {
  filterTodo: (param: string) => void;
  inputTodo: (e: string) => void;
  query: string;
};

export const TodoFilter: React.FC<Props> = ({
  filterTodo,
  inputTodo,
  query,
}) => (
  <form className="field has-addons">
    <p className="control">
      <span className="select">
        <select
          data-cy="statusSelect"
          // eslint-disable-next-line max-len
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            filterTodo(e.target.value)
          }
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </span>
    </p>

    <p className="control is-expanded has-icons-left has-icons-right">
      <input
        data-cy="searchInput"
        type="text"
        className="input"
        placeholder="Search..."
        value={query || ''}
        // eslint-disable-next-line max-len
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          inputTodo(e.target.value)
        }
      />
      <span className="icon is-left">
        <i className="fas fa-magnifying-glass" />
      </span>

      {query && (
        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="clearSearchButton"
            type="button"
            className="delete"
            onClick={() => inputTodo('')}
          />
        </span>
      )}
    </p>
  </form>
);
