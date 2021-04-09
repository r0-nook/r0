select id, base % factor = 0 as res from kata

select id,
case
  when base % factor = 0 then 'true'::boolean
  else 'false'::boolean
end as res from kata

