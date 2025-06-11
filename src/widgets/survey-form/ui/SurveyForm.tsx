import { survey, SurveyItem } from 'entities/survey'
import { OptionItem ,useSelectOption } from 'features/select-option'

export const SurveyForm = () => {
  const { selectedOption, handleSelect } = useSelectOption(survey)

  return (
    <div className="wrap">
      {survey.map((item: SurveyItem, q: number) => (
        <div
          key={q}
          className="survey_list"
        >
          <div className="title">
            <h3>{item.question}</h3>
            {item.multi && (
              <span className="description">{item.multi}개 선택 가능</span>
            )}
          </div>
          {item.options.map((option:string, o:number) => (
            <OptionItem
              key={o}
              label={option}
              active={selectedOption[q]?.includes(o) || false}
              onClick={() => handleSelect(q, o)}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
