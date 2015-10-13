from plone.protect import PostOnly
from Products.Five import BrowserView


class Save(BrowserView):

    def save(self):
        """Save json to the context.

        Or pretend for now. :-)
        """
        PostOnly(self.request)
        # XXX Do something. Where is the data?

        return ['foobar success']
