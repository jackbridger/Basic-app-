BEGIN;

    DROP TABLE IF EXISTS jackstestdb
    CASCADE;

CREATE TABLE jackstestdb
(
    id SERIAL PRIMARY KEY,
    jack_name VARCHAR(50) NOT NULL UNIQUE
);

INSERT INTO jackstestdb
    (jack_name)
VALUES
    ('jack1'),
    ('jack2'),
    ('jack3');

COMMIT;