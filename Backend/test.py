from dotenv import load_dotenv
from langchain.chat_models import ChatOpenAI
from langchain.schema import HumanMessage
import warnings 

warnings.filterwarnings("ignore")
load_dotenv()

from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler

chat = ChatOpenAI(model_name="gpt-4o",
    streaming=True, callbacks=[StreamingStdOutCallbackHandler()], temperature=0
)
print(chat([HumanMessage(content="Write me a song about sparkling water.")]))