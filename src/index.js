import {
  TextControl,
  Button,
  Icon,
  PanelBody,
  PanelRow,
  ColorPicker,
} from "@wordpress/components";
import {
  InspectorControls,
  BlockControls,
  AlignmentToolbar,
} from "@wordpress/block-editor";
import { ChromePicker } from "react-color";
import "./index.scss";

(function () {
  let locked = false;

  wp.data.subscribe(function () {
    const quizBlocks = wp.data
      .select("core/block-editor")
      .getBlocks()
      .filter(
        (block) =>
          block.name === "greatkhanjoy/quiz" &&
          block.attributes.correctAnswer === undefined
      );

    if (quizBlocks.length && !locked) {
      locked = true;
      wp.data.dispatch("core/editor").lockPostSaving("noAnswer");
    }

    if (!quizBlocks.length && locked) {
      locked = false;
      wp.data.dispatch("core/editor").unlockPostSaving("noAnswer");
    }
  });
})();

wp.blocks.registerBlockType("greatkhanjoy/quiz", {
  title: "Quiz",
  icon: "smiley",
  description: "A simple quiz block",
  category: "common",
  attributes: {
    question: { type: "string" },
    answers: { type: "array", default: [""] },
    correctAnswer: { type: "number", default: undefined },
    bgColor: { type: "string", default: "#EBEBEB" },
    headingColor: { type: "string", default: "#000000" },
    answerColor: { type: "string", default: "#000000" },
    answerBgColor: { type: "string", default: "#FFFFFF" },
    answerBgColorHover: { type: "string", default: "#fdfdfd" },
    theAlignment: { type: "string", default: "left" },
  },
  example: {
    attributes: {
      question: "What is the capital of Bangladesh?",
      answers: ["Dhaka", "Chittagong", "Rajshahi"],
      correctAnswer: 0,
      bgColor: "#EBEBEB",
      headingColor: "#000000",
      answerColor: "#000000",
      answerBgColor: "#FFFFFF",
      answerBgColorHover: "#fdfdfd",
    },
  },
  edit: EditComponent,
  save: function (props) {
    return null;
  },
});

function EditComponent(props) {
  const updateQuestion = (value) => {
    props.setAttributes({ question: value });
  };

  const addAnswer = () => {
    props.setAttributes({ answers: [...props.attributes.answers, ""] });
  };

  const updateAnswer = (value, index) => {
    const answers = [...props.attributes.answers];
    answers[index] = value.target.value;
    props.setAttributes({ answers: answers });
  };

  const deleteAnswer = (index) => {
    const answers = [...props.attributes.answers];
    answers.splice(index, 1);
    props.setAttributes({ answers: answers });

    if (props.attributes.correctAnswer === index)
      props.setAttributes({ correctAnswer: undefined });
    if (props.attributes.correctAnswer > index)
      props.setAttributes({
        correctAnswer: props.attributes.correctAnswer - 1,
      });
  };

  const setCorrectAnswer = (index) => {
    props.setAttributes({ correctAnswer: index });
  };
  return (
    <div className="flex flex-col space-y-3">
      <div
        className="quiz-edit-block"
        style={{ backgroundColor: props.attributes.bgColor }}
      >
        <BlockControls>
          <AlignmentToolbar
            value={props.attributes.theAlignment}
            onChange={(e) => props.setAttributes({ theAlignment: e })}
          />
        </BlockControls>
        <InspectorControls>
          <PanelBody title="Background Color" initialOpen={true}>
            <PanelRow>
              <ChromePicker
                color={props.attributes.bgColor}
                onChangeComplete={(e) =>
                  props.setAttributes({ bgColor: e.hex })
                }
                disableAlpha={true}
              />
            </PanelRow>
          </PanelBody>
          <PanelBody title="Heading Color" initialOpen={true}>
            <PanelRow>
              <ChromePicker
                color={props.attributes.headingColor}
                onChangeComplete={(e) =>
                  props.setAttributes({ headingColor: e.hex })
                }
                disableAlpha={true}
              />
            </PanelRow>
          </PanelBody>
          <PanelBody title="Answer Color" initialOpen={true}>
            <PanelRow>
              <ChromePicker
                color={props.attributes.answerColor}
                onChangeComplete={(e) =>
                  props.setAttributes({ answerColor: e.hex })
                }
                disableAlpha={true}
              />
            </PanelRow>
          </PanelBody>
          <PanelBody title="Answer Box Background Color" initialOpen={true}>
            <PanelRow>
              <ChromePicker
                color={props.attributes.answerBgColor}
                onChangeComplete={(e) =>
                  props.setAttributes({ answerBgColor: e.hex })
                }
                disableAlpha={true}
              />
            </PanelRow>
          </PanelBody>
          <PanelBody
            title="Answer Box Hover Background Color"
            initialOpen={true}
          >
            <PanelRow>
              <ChromePicker
                color={props.attributes.answerBgColorHover}
                onChangeComplete={(e) =>
                  props.setAttributes({ answerBgColorHover: e.hex })
                }
                disableAlpha={true}
              />
            </PanelRow>
          </PanelBody>
        </InspectorControls>
        <TextControl
          label="Question:"
          style={{ fontSize: "20px" }}
          value={props.attributes.question}
          onChange={updateQuestion}
        />
        <p className="text-[13px] mt-[20px] mb-[8px]">Answers:</p>
        <div className="flex flex-col space-y-4">
          {props.attributes.answers.map((answer, index) => (
            <div
              key={index}
              className="flex justify-between gap-5 items-center"
            >
              <input
                type="text"
                value={answer}
                className="w-full"
                onChange={(e) => updateAnswer(e, index)}
              />
              <div className="flex justify-between gap-2 items-center">
                <Button
                  className="outline-none focus:ring-none"
                  onClick={() => setCorrectAnswer(index)}
                >
                  <Icon
                    icon={
                      props.attributes.correctAnswer === index
                        ? "star-filled"
                        : "star-empty"
                    }
                    className="text-[#ffd700] cursor-pointer hover:scale-125 hover:rotate-45 transition-all ease-in-out duration-300 hover:text-[#ffd700]"
                  />
                </Button>
                <Button
                  onClick={() => deleteAnswer(index)}
                  className="text-red-600 font-bold underline hover:text-red-900"
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
        <Button onClick={addAnswer} isPrimary className="mt-[20px]">
          Add Answer
        </Button>
      </div>
      {/* Preview */}
      <div>
        <h3 className="text-center text-[16px]">Preview</h3>
        <div
          className="quiz-frontend relative p-5  rounded-md shadow-md shadow-gray-400 "
          style={{ backgroundColor: props.attributes.bgColor }}
        >
          <div className="space-y-4 relative z-10">
            <p
              className="text-xl font-semibold"
              style={{
                color: props.attributes.headingColor,
                textAlign: props.attributes.theAlignment,
              }}
            >
              {props.attributes.question}
            </p>
            <ul className="flex justify-between gap-3">
              {props.attributes.answers.map((answer, index) => {
                return (
                  <li
                    className={`px-3 py-3 rounded-md w-full flex gap-2 items-center font-semibold cursor-pointer hover:bg-[${props.attributes.answerBgColorHover}]`}
                    style={{
                      color: props.attributes.answerColor,
                      backgroundColor: props.attributes.answerBgColor,
                    }}
                  >
                    {answer}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
